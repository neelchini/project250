-- Add vendor verification fields
ALTER TABLE Vendors
  ADD COLUMN verification_status ENUM('unverified','pending','verified','rejected') NOT NULL DEFAULT 'unverified',
  ADD COLUMN verification_requested_at DATETIME NULL,
  ADD COLUMN verification_documents JSON NULL;

-- Optional: create index on status for quicker filtering
CREATE INDEX IF NOT EXISTS idx_vendors_verification_status ON Vendors (verification_status);
