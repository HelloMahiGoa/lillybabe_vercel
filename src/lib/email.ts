// Email service with notification templates

import { 
  sendEmail as sendEmailService,
  EmailData, 
  EmailResponse, 
  AdApprovalEmailData, 
  AdRejectionEmailData,
  PasswordResetEmailData,
  VerificationEmailData,
  PaymentConfirmationEmailData,
  SubscriptionExpiryEmailData
} from './email-service';

/**
 * Send email using the configured email service
 */
export async function sendEmail(emailData: EmailData): Promise<EmailResponse> {
  return sendEmailService(emailData);
}

/**
 * Send account verification email
 */
export async function sendVerificationEmail(
  to: string,
  data: VerificationEmailData
): Promise<EmailResponse> {
  const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/verify?token=${data.verificationToken}`;
  
  const html = `
    <h2>Welcome to LillyBabe!</h2>
    <p>Hello ${data.name},</p>
    <p>Thank you for registering with LillyBabe. Please verify your email address by clicking the link below:</p>
    <p><a href="${verificationUrl}" style="padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a></p>
    <p>Or copy and paste this URL into your browser: ${verificationUrl}</p>
    <p>This link will expire in 24 hours.</p>
    <p>If you did not create an account, you can safely ignore this email.</p>
    <p>Best regards,<br>LillyBabe Team</p>
  `;

  const text = `
    Welcome to LillyBabe!
    
    Hello ${data.name},
    
    Thank you for registering with LillyBabe. Please verify your email address by clicking the link below:
    
    ${verificationUrl}
    
    This link will expire in 24 hours.
    
    If you did not create an account, you can safely ignore this email.
    
    Best regards,
    LillyBabe Team
  `;

  return sendEmail({
    to,
    subject: 'Verify Your Email Address - LillyBabe',
    html,
    text,
  });
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(
  to: string,
  data: PasswordResetEmailData
): Promise<EmailResponse> {
  const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password?token=${data.resetToken}`;
  
  const html = `
    <h2>Password Reset - LillyBabe</h2>
    <p>Hello ${data.name},</p>
    <p>You've requested to reset your password. Click the link below to create a new password:</p>
    <p><a href="${resetUrl}" style="padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
    <p>Or copy and paste this URL into your browser: ${resetUrl}</p>
    <p>This link will expire in 1 hour.</p>
    <p>If you didn't request a password reset, you can safely ignore this email.</p>
    <p>Best regards,<br>LillyBabe Team</p>
  `;

  const text = `
    Password Reset - LillyBabe
    
    Hello ${data.name},
    
    You've requested to reset your password. Click the link below to create a new password:
    
    ${resetUrl}
    
    This link will expire in 1 hour.
    
    If you didn't request a password reset, you can safely ignore this email.
    
    Best regards,
    LillyBabe Team
  `;

  return sendEmail({
    to,
    subject: 'Reset Your Password - LillyBabe',
    html,
    text,
  });
}

/**
 * Send ad approval notification
 */
export async function sendAdApprovalEmail(
  to: string,
  data: AdApprovalEmailData
): Promise<EmailResponse> {
  const dashboardUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/ads`;
  
  const html = `
    <h2>Your Ad Has Been Approved!</h2>
    <p>Hello ${data.name},</p>
    <p>We're pleased to inform you that your ad <strong>${data.adTitle}</strong> has been approved and is now live on our platform.</p>
    <p>You can view your ads by clicking the link below:</p>
    <p><a href="${dashboardUrl}" style="padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">View Your Ads</a></p>
    <p>Thank you for using our platform!</p>
    <p>Best regards,<br>LillyBabe Team</p>
  `;

  const text = `
    Your Ad Has Been Approved!
    
    Hello ${data.name},
    
    We're pleased to inform you that your ad "${data.adTitle}" has been approved and is now live on our platform.
    
    You can view your ads at: ${dashboardUrl}
    
    Thank you for using our platform!
    
    Best regards,
    LillyBabe Team
  `;

  return sendEmail({
    to,
    subject: 'Your Ad Has Been Approved - LillyBabe',
    html,
    text,
  });
}

/**
 * Send ad rejection notification
 */
export async function sendAdRejectionEmail(
  to: string,
  data: AdRejectionEmailData
): Promise<EmailResponse> {
  const dashboardUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/ads`;
  
  const html = `
    <h2>Your Ad Requires Changes</h2>
    <p>Hello ${data.name},</p>
    <p>We've reviewed your ad <strong>${data.adTitle}</strong> and unfortunately, we cannot approve it in its current form.</p>
    <p><strong>Reason:</strong> ${data.reason}</p>
    <p>You can edit your ad by clicking the link below:</p>
    <p><a href="${dashboardUrl}" style="padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">Edit Your Ad</a></p>
    <p>Once you've made the necessary changes, your ad will be reviewed again.</p>
    <p>Best regards,<br>LillyBabe Team</p>
  `;

  const text = `
    Your Ad Requires Changes
    
    Hello ${data.name},
    
    We've reviewed your ad "${data.adTitle}" and unfortunately, we cannot approve it in its current form.
    
    Reason: ${data.reason}
    
    You can edit your ad at: ${dashboardUrl}
    
    Once you've made the necessary changes, your ad will be reviewed again.
    
    Best regards,
    LillyBabe Team
  `;

  return sendEmail({
    to,
    subject: 'Your Ad Requires Changes - LillyBabe',
    html,
    text,
  });
}

/**
 * Send payment confirmation email
 */
export async function sendPaymentConfirmationEmail(
  to: string,
  data: PaymentConfirmationEmailData
): Promise<EmailResponse> {
  const dashboardUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`;
  const endDateFormatted = new Date(data.endDate).toLocaleDateString();
  
  const html = `
    <h2>Payment Confirmation</h2>
    <p>Hello ${data.name},</p>
    <p>Thank you for your payment. Your ad has been activated successfully.</p>
    <p><strong>Plan:</strong> ${data.planName}<br>
    <strong>Amount:</strong> ₹${data.amount}<br>
    <strong>Valid until:</strong> ${endDateFormatted}<br>
    <strong>Reference:</strong> ${data.paymentReference}</p>
    <p>You can start posting ads right away from your dashboard:</p>
    <p><a href="${dashboardUrl}" style="padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">Go to Dashboard</a></p>
    <p>Thank you for choosing LillyBabe!</p>
    <p>Best regards,<br>LillyBabe Team</p>
  `;

  const text = `
    Payment Confirmation
    
    Hello ${data.name},
    
    Thank you for your payment. Your ad has been activated successfully.
    
    Plan: ${data.planName}
    Amount: ₹${data.amount}
    Valid until: ${endDateFormatted}
    Reference: ${data.paymentReference}
    
    You can start posting ads right away from your dashboard: ${dashboardUrl}
    
    Thank you for choosing LillyBabe!
    
    Best regards,
    LillyBabe Team
  `;

  return sendEmail({
    to,
    subject: 'Payment Confirmation - LillyBabe',
    html,
    text,
  });
}

/**
 * Send ad expiry notification
 */
export async function sendSubscriptionExpiryEmail(
  to: string,
  data: SubscriptionExpiryEmailData
): Promise<EmailResponse> {
  const renewUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/user/ads`;
  const expiryDateFormatted = new Date(data.expiryDate).toLocaleDateString();
  
  const html = `
    <h2>Your Ad Is Expiring Soon</h2>
    <p>Hello ${data.name},</p>
    <p>This is a friendly reminder that your <strong>${data.planName}</strong> ad will expire in <strong>${data.daysRemaining} days</strong> (on ${expiryDateFormatted}).</p>
    <p>To keep your ad live, please renew it before the expiry date.</p>
    <p><a href="${renewUrl}" style="padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">Renew Ad</a></p>
    <p>Thank you for using LillyBabe!</p>
    <p>Best regards,<br>LillyBabe Team</p>
  `;

  const text = `
    Your Ad Is Expiring Soon
    
    Hello ${data.name},
    
    This is a friendly reminder that your ${data.planName} ad will expire in ${data.daysRemaining} days (on ${expiryDateFormatted}).
    
    To keep your ad live, please renew it before the expiry date.
    
    Renew your ad here: ${renewUrl}
    
    Thank you for using LillyBabe!
    
    Best regards,
    LillyBabe Team
  `;

  return sendEmail({
    to,
    subject: 'Your Ad is Expiring Soon - LillyBabe',
    html,
    text,
  });
}