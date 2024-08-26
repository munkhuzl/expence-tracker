    CREATE TABLE category (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL, 
        icon varchar(16),
        color varchar(16),
    )
    ALTER TABLE category 
    ADD COLUMN color varchar(16),
    ADD COLUMN icon varchar(16);

SELECT * FROM category;

