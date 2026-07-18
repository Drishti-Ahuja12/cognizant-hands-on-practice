CREATE TABLE IF NOT EXISTS country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50) NOT NULL
);

INSERT IGNORE INTO country (co_code, co_name) VALUES
    ('IN', 'India'),
    ('US', 'United States of America');
