CREATE TABLE staging_homegym(
    id SERIAL PRIMARY KEY,
    date varchar(255),
    student_name varchar(255),
    role varchar(255),
    height int,
    weight int,
    frequency int,
    goal int,
    focus int,
    student_gender varchar(255),
    score int,
    course_name varchar(255),
    category varchar(255),
    seat int,
    trainer_name varchar(255), ??
    trainer_gender varchar(255), ??
    speciality [array]jsonb,
    qualification [array]jsonb,
    isVideo boolean,
    package_name varchar(255), 
    package_price int,
    payment_type varchar(255),
    package_credit int,
    sales_quantity int,
    sales_amount int,
    enrolment_no int,
    processing boolean default false
);


create table dim_Date(
    id SERIAL PRIMARY KEY,
    isoDate varachar(255),
    unixTimeStamp long,
    year int,
    month int,
    day int,
    hour int,
    minute int,
    second int,
    day_of_week varchar(255),
    date timestamp
);


CREATE TABLE dim_Student(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    role varchar(255),
    height int,
    weight int,
    frequency int,
    goal int,
    focus int,
    gender varchar(255),
    score int,
    DOB timestamp,
    expiry_date timestamp
);


CREATE TABLE dim_Course(
    id SERIAL PRIMARY KEY,
    course_name varchar(255),
    category varchar(255),
    seat int
);


CREATE TABLE dim_PersonalTrainer(
    id SERIAL PRIMARY KEY,
    trainer_name varchar(255),
    trainer_gender varchar(255),
    qualification [array]jsonb,
    specialty [array]jsonb,
    isVideo boolean
);


CREATE TABLE dim_Transaction(
    id SERIAL PRIMARY KEY,
    package_name varchar(255),
    package_price varchar(255),
    payment_type varchar(255),
    package_credit int(255),
    created_at timestamp
);


CREATE TABLE fact_sales(
    id SERIAL PRIMARY KEY,
    sales_quantity int,
    sales_amount int,
    enrolment_no int,
    FOREIGN KEY (dim_Date_id) REFERENCES dim_Date(id),
    FOREIGN KEY (dim_Transaction_id) REFERENCES dim_Transaction(id),
    FOREIGN KEY (dim_Student_id) REFERENCES dim_Student(id),
    FOREIGN KEY (dim_PersonalTrainer_id) REFERENCES dim_PersonalTrainer(id),
    FOREIGN KEY (dim_Course_id) REFERENCES dim_Course(id)
);


