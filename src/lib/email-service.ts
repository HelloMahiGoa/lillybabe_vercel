// Consolidated email service using NodeMailer

import nodemailer from 'nodemailer';

// Email interfaces
export interface EmailData {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  previewUrl?: string;
}

export interface AdApprovalEmailData {
  name: string;
  adTitle: string;
}

export interface AdRejectionEmailData {
  name: string;
  adTitle: string;
  reason: string;
}

export interface PasswordResetEmailData {
  name: string;
  resetToken: string;
}

export interface VerificationEmailData {
  name: string;
  verificationToken: string;
}

export interface PaymentConfirmationEmailData {
  name: string;
  planName: string;
  amount: number;
  endDate: string;
  paymentReference: string;
}

export interface SubscriptionExpiryEmailData {
  name: string;
  planName: string;
  expiryDate: string;
  daysRemaining: number;
}

// Store the transporter as a singleton
let transporter: nodemailer.Transporter | null = null;

/**
 * Get or create a NodeMailer transporter
 */
function getTransporter(): nodemailer.Transporter {
  if (transporter) {
    return transporter;
  }

  // Check if we're using SMTP or a service
  if (process.env.EMAIL_SMTP_HOST) {
    // SMTP configuration
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: parseInt(process.env.EMAIL_SMTP_PORT || '587'),
      secure: process.env.EMAIL_SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASSWORD,
      },
    });
  } else {
    // Using Ethereal for testing when no SMTP is configured
    console.warn('No SMTP configuration found, using Ethereal for testing');
    nodemailer.createTestAccount().then((account: nodemailer.TestAccount) => {
      transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
      
    });
    
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'test@ethereal.email',
        pass: 'password',
      },
    });
  }

  return transporter;
}

/**
 * Send email using NodeMailer
 */
export async function sendEmail(emailData: EmailData): Promise<EmailResponse> {
  try {
    if (!process.env.EMAIL_FROM) {
      console.error('Email FROM address not configured');
      return { 
        success: false, 
        message: 'Email service not configured properly' 
      };
    }

    const transport = getTransporter();
    
    // Prepare email data
    const mailOptions: nodemailer.SendMailOptions = {
      from: `LillyBabe <${process.env.EMAIL_FROM}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    };

    // Send the email
    const info = await transport.sendMail(mailOptions);
    
    // If using Ethereal, provide the preview URL
    const previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
    
    return { 
      success: true, 
      message: `Email sent with ID: ${info.messageId}`,
      previewUrl
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error sending email'
    };
  }
}
