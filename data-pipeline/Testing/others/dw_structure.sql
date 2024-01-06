CREATE TABLE staging_data(
    id SERIAL PRIMARY KEY,
    created_at INTEGER,
    column1 INTEGER,
    column2 INTEGER,
    column3 INTEGER,
    column4 INTEGER,
    column5 INTEGER,
    iso_date TIMESTAMP,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    processing BOOLEAN default false
);

CREATE TABLE dim_dates(
    id SERIAL PRIMARY KEY,
    year INTEGER,
    month INTEGER,
    day INTEGER
);

CREATE TABLE fact_data(
    id SERIAL PRIMARY KEY,
    dim_dates_id INTEGER,
    column1 INTEGER,
    column2 INTEGER,
    column3 INTEGER,
    column4 INTEGER,
    column5 INTEGER,
    FOREIGN KEY (dim_dates_id) REFERENCES dim_dates(id)
);

CREATE UNIQUE INDEX dim_dates_unique_idx ON dim_dates (year, month, day);

