ALTER TABLE Vendors
ADD COLUMN whatsapp_link VARCHAR(500) null,
ADD COLUMN service_radius_km INT DEFAULT 5 not null,
ADD COLUMN visiting_card_url VARCHAR(500),
ADD COLUMN shop_address TEXT null,
ADD COLUMN service_locations JSON;
