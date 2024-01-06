\c postgres
DROP DATABASE dw_homegym;
CREATE DATABASE dw_homegym;
\c dw_homegym

CREATE TABLE staging_student(
    id SERIAL PRIMARY KEY,
    displayname VARCHAR(255),
    email VARCHAR(255),
    height INTEGER,
    weight INTEGER,
    age INTEGER,
    gender VARCHAR(255),
    created_at VARCHAR(255),
    goal VARCHAR(255),
    frequency VARCHAR(255),
    focus VARCHAR(255),
    processing BOOLEAN default false
);

CREATE TABLE dim_created_at(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    year INTEGER,
    month INTEGER,
    day INTEGER
);
CREATE UNIQUE INDEX dim_created_at_unique_idx ON dim_created_at (date);

CREATE TABLE dim_std_identification(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    displayname VARCHAR(255)
);
CREATE UNIQUE INDEX dim_std_identification_unique_idx ON dim_std_identification (email);

CREATE TABLE dim_goal(
    id SERIAL PRIMARY KEY,
    goal VARCHAR(255)
);
CREATE UNIQUE INDEX dim_goal_unique_idx ON dim_goal (goal);

CREATE TABLE dim_frequency(
    id SERIAL PRIMARY KEY,
    frequency VARCHAR(255)
);
CREATE UNIQUE INDEX dim_frequency_unique_idx ON dim_frequency (frequency);

CREATE TABLE dim_focus(
    id SERIAL PRIMARY KEY,
    focus VARCHAR(255)
);
CREATE UNIQUE INDEX dim_focus_unique_idx ON dim_focus (focus);

CREATE TABLE dim_gender(
    id SERIAL PRIMARY KEY,
    gender VARCHAR(255)
);
CREATE UNIQUE INDEX dim_gender_unique_idx ON dim_gender (gender);

CREATE TABLE fact_student(
    id SERIAL PRIMARY KEY,
    height INTEGER,
    weight INTEGER,
    age INTEGER,
    dim_created_at_id INTEGER,
    dim_std_identification_id INTEGER,
    dim_goal_id INTEGER,
    dim_frequency_id INTEGER,
    dim_focus_id INTEGER,
    dim_gender_id INTEGER,
    FOREIGN KEY (dim_created_at_id) REFERENCES dim_created_at(id),
    FOREIGN KEY (dim_std_identification_id) REFERENCES dim_std_identification(id),
    FOREIGN KEY (dim_goal_id) REFERENCES dim_goal(id),
    FOREIGN KEY (dim_frequency_id) REFERENCES dim_frequency(id),
    FOREIGN KEY (dim_focus_id) REFERENCES dim_focus(id),
    FOREIGN KEY (dim_gender_id) REFERENCES dim_gender(id)
);

