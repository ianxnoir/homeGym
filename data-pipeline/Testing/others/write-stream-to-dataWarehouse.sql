BEGIN;

UPDATE staging_data SET processing = true;

INSERT INTO dim_dates (year, month, day) 
    SELECT year, month, day
    FROM staging_data 
    WHERE processing = true
    ON conflict (year, month, day) do nothing;

INSERT INTO fact_data (dim_dates_id, column1, column2, column3, column4, column5)
    SELECT dim_dates.id AS dim_dates_id, column1, column2, column3, column4, column5
    FROM staging_data
    INNER JOIN dim_dates 
        ON dim_dates.year = staging_data.year
        AND dim_dates.month = staging_data.month
        AND dim_dates.day = staging_data.day
    WHERE staging_data.processing = true;

DELETE FROM staging_data WHERE processing = true;

COMMIT;