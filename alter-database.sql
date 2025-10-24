-- ==========================================
-- ALTER SCRIPT - Fix Ad Plans Conflicts
-- ==========================================
-- Run this on existing database to remove user_type_id from ad_plans
-- ==========================================

BEGIN;

-- Backup existing ad_plans
CREATE TABLE IF NOT EXISTS ad_plans_backup_temp AS SELECT * FROM ad_plans;

-- Update user type descriptions
UPDATE user_types SET description = 'Independent Escort - Pay per ad' WHERE name = 'independent';
UPDATE user_types SET description = 'Agency - Pay per ad' WHERE name = 'agency';

-- Deactivate old agency-specific plans (price > 1500)
UPDATE ad_plans SET is_active = FALSE WHERE price > 1500;

-- Remove user_type_id from ad_plans
DROP INDEX IF EXISTS idx_ad_plans_user_type;
ALTER TABLE ad_plans DROP CONSTRAINT IF EXISTS ad_plans_user_type_id_fkey;
ALTER TABLE ad_plans DROP COLUMN IF EXISTS user_type_id;

-- Add new indexes
CREATE INDEX IF NOT EXISTS idx_ad_plans_sort_order ON ad_plans(sort_order);
CREATE INDEX IF NOT EXISTS idx_user_ads_plan_id ON user_ads(plan_id);
CREATE INDEX IF NOT EXISTS idx_payments_plan_id ON payments(plan_id);

-- Rename user_subscriptions table to deprecated
ALTER TABLE IF EXISTS user_subscriptions RENAME TO user_subscriptions_deprecated;
DROP TRIGGER IF EXISTS update_user_subscriptions_updated_at ON user_subscriptions_deprecated;
DROP INDEX IF EXISTS idx_user_subscriptions_user_id;
DROP INDEX IF EXISTS idx_user_subscriptions_is_active;
DROP INDEX IF EXISTS idx_user_subscriptions_end_date;
ALTER TABLE user_subscriptions_deprecated DROP CONSTRAINT IF EXISTS fk_user_subscriptions_payment_id;

-- Recreate views
DROP VIEW IF EXISTS active_user_ads_with_details;
CREATE VIEW active_user_ads_with_details AS
SELECT 
  ua.*,
  pu.full_name as user_full_name,
  pu.email as user_email,
  pu.user_type_id,
  ut.name as user_type_name,
  ap.name as plan_name,
  ap.duration_days,
  ap.price as plan_price,
  p.payment_status,
  p.amount as payment_amount
FROM user_ads ua
JOIN platform_users pu ON ua.user_id = pu.id
JOIN user_types ut ON pu.user_type_id = ut.id
LEFT JOIN ad_plans ap ON ua.plan_id = ap.id
LEFT JOIN payments p ON ua.payment_id = p.id
WHERE ua.is_active = TRUE AND ua.is_expired = FALSE;

DROP VIEW IF EXISTS pending_approvals_with_details;
CREATE VIEW pending_approvals_with_details AS
SELECT 
  ua.*,
  pu.full_name as user_full_name,
  pu.email as user_email,
  pu.phone_number as user_phone,
  ut.name as user_type_name,
  ap.name as plan_name,
  ap.price as plan_price,
  p.payment_status,
  p.payment_proof_url,
  p.transaction_id
FROM user_ads ua
JOIN platform_users pu ON ua.user_id = pu.id
JOIN user_types ut ON pu.user_type_id = ut.id
LEFT JOIN ad_plans ap ON ua.plan_id = ap.id
LEFT JOIN payments p ON ua.payment_id = p.id
WHERE ua.approval_status = 'pending';

CREATE OR REPLACE VIEW payment_statistics AS
SELECT 
  COUNT(*) FILTER (WHERE payment_status = 'pending') as pending_payments,
  COUNT(*) FILTER (WHERE payment_status = 'verified') as verified_payments,
  COUNT(*) FILTER (WHERE payment_status = 'rejected') as rejected_payments,
  COALESCE(SUM(amount) FILTER (WHERE payment_status = 'verified'), 0) as total_revenue,
  COALESCE(SUM(amount) FILTER (WHERE payment_status = 'verified' AND created_at >= CURRENT_DATE - INTERVAL '30 days'), 0) as monthly_revenue
FROM payments;

COMMIT;

-- Verify changes
SELECT 'Active Plans:' as info;
SELECT id, name, duration_days, price, is_active FROM ad_plans ORDER BY sort_order;

SELECT 'Migration Complete!' as status;

