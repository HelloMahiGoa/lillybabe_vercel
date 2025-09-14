import { JWT } from 'google-auth-library';

interface GoogleServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
}

export interface IndexingRequest {
  url: string;
  type: 'URL_UPDATED' | 'URL_DELETED';
}

export interface IndexingResponse {
  success: boolean;
  message: string;
  requestId?: string;
  error?: string;
}

class GoogleIndexingService {
  private jwtClient: JWT | null = null;
  private readonly SCOPES = ['https://www.googleapis.com/auth/indexing'];

  constructor() {
    this.initializeJWT();
  }

  private initializeJWT() {
    try {
      // Check if all required environment variables are present
      const requiredVars = [
        'GOOGLE_SERVICE_ACCOUNT_TYPE',
        'GOOGLE_SERVICE_ACCOUNT_PROJECT_ID',
        'GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID',
        'GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY',
        'GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL',
        'GOOGLE_SERVICE_ACCOUNT_CLIENT_ID',
        'GOOGLE_SERVICE_ACCOUNT_AUTH_URI',
        'GOOGLE_SERVICE_ACCOUNT_TOKEN_URI',
        'GOOGLE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL',
        'GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL',
        'GOOGLE_SERVICE_ACCOUNT_UNIVERSE_DOMAIN'
      ];

      const missingVars = requiredVars.filter(varName => !process.env[varName]);
      if (missingVars.length > 0) {
        console.error('Missing required environment variables:', missingVars);
        return;
      }

      const serviceAccount: GoogleServiceAccount = {
        type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE!,
        project_id: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID!,
        private_key_id: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID!,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL!,
        client_id: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID!,
        auth_uri: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_URI!,
        token_uri: process.env.GOOGLE_SERVICE_ACCOUNT_TOKEN_URI!,
        auth_provider_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL!,
        client_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL!,
        universe_domain: process.env.GOOGLE_SERVICE_ACCOUNT_UNIVERSE_DOMAIN!,
      };

      console.log('Initializing JWT client with service account:', serviceAccount.client_email);

      this.jwtClient = new JWT({
        email: serviceAccount.client_email,
        key: serviceAccount.private_key,
        scopes: this.SCOPES,
      });

      console.log('JWT client initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Google JWT client:', error);
    }
  }

  async requestIndexing(url: string, type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED'): Promise<IndexingResponse> {
    if (!this.jwtClient) {
      return {
        success: false,
        message: 'Google indexing service not properly configured',
        error: 'JWT client not initialized'
      };
    }

    try {
      // Get access token
      const accessToken = await this.jwtClient.getAccessToken();
      
      if (!accessToken.token) {
        return {
          success: false,
          message: 'Failed to get access token',
          error: 'No access token received'
        };
      }

      // Prepare the indexing request
      const requestBody = {
        url: url,
        type: type
      };

      // Make the indexing request
      const response = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: `Google indexing request failed: ${responseData.error?.message || 'Unknown error'}`,
          error: responseData.error?.message || 'HTTP error'
        };
      }

      return {
        success: true,
        message: `Successfully submitted ${type} request for ${url}`,
        requestId: responseData.urlNotificationMetadata?.latestUpdate?.notifyTime
      };

    } catch (error) {
      console.error('Google indexing error:', error);
      
      let errorMessage = 'Failed to submit indexing request';
      let detailedError = error instanceof Error ? error.message : 'Unknown error';
      
      // Provide more specific error messages for common issues
      if (detailedError.includes('invalid_grant')) {
        if (detailedError.includes('account not found')) {
          errorMessage = 'Service account not found or invalid. Please check your Google Cloud Console configuration.';
          detailedError = 'The service account may not exist, be deleted, or lack proper permissions.';
        } else {
          errorMessage = 'Invalid authentication credentials. Please verify your service account setup.';
        }
      } else if (detailedError.includes('insufficient_scope')) {
        errorMessage = 'Service account lacks required permissions for Google Indexing API.';
        detailedError = 'Please ensure the service account has the "Indexing Service" role.';
      } else if (detailedError.includes('quotaExceeded')) {
        errorMessage = 'Google Indexing API quota exceeded.';
        detailedError = 'You have reached the daily limit for indexing requests.';
      }
      
      return {
        success: false,
        message: errorMessage,
        error: detailedError
      };
    }
  }

  async batchRequestIndexing(urls: string[], type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED'): Promise<IndexingResponse[]> {
    const results: IndexingResponse[] = [];
    
    // Process URLs in batches to avoid rate limiting
    const batchSize = 5;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const batchPromises = batch.map(url => this.requestIndexing(url, type));
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      // Add delay between batches to respect rate limits
      if (i + batchSize < urls.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    return results;
  }

  validateUrl(url: string): { valid: boolean; error?: string } {
    try {
      const urlObj = new URL(url);
      
      // Check if it's a valid HTTP/HTTPS URL
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        return { valid: false, error: 'URL must use HTTP or HTTPS protocol' };
      }
      
      // Check if it's from the same domain (optional security check)
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
      if (siteUrl) {
        const siteDomain = new URL(siteUrl).hostname;
        const urlDomain = urlObj.hostname;
        
        // Allow exact domain match or subdomains
        const isSameDomain = urlDomain === siteDomain || 
                           urlDomain.endsWith('.' + siteDomain) ||
                           siteDomain.endsWith('.' + urlDomain);
        
        if (!isSameDomain) {
          return { valid: false, error: `URL must be from the same domain (${siteDomain}) or its subdomains` };
        }
      }
      
      return { valid: true };
    } catch (error) {
      return { valid: false, error: 'Invalid URL format' };
    }
  }
}

// Export singleton instance
export const googleIndexingService = new GoogleIndexingService();
