BEGIN;

UPDATE staging_student SET processing = true;

INSERT INTO dim_created_at (date, year, month, day) 
    (SELECT 
        to_date(created_at,'YYYY-MM-DD') as date,
        substring(created_at,1,4)::INTEGER as year,
        substring(created_at,6,2)::INTEGER as month, 
        substring(created_at,9,2)::INTEGER as day
    FROM staging_student WHERE processing = true)
    ON conflict (date) do nothing;

INSERT INTO dim_std_identification(email, displayname)
    (SELECT email, displayname
    FROM staging_student
    WHERE processing = true)
    ON conflict (email) do nothing;

INSERT INTO dim_goal(goal)
    (SELECT goal
    FROM staging_student
    WHERE processing = true)
    ON conflict (goal) do nothing;

INSERT INTO dim_frequency(frequency)
    (SELECT frequency
    FROM staging_student
    WHERE processing = true)
    ON conflict (frequency) do nothing;

INSERT INTO dim_focus(focus)
    (SELECT focus
    FROM staging_student
    WHERE processing = true)
    ON conflict (focus) do nothing;

INSERT INTO dim_gender(gender)
    (SELECT gender
    FROM staging_student
    WHERE processing = true)
    ON conflict (gender) do nothing;

INSERT INTO fact_student (dim_created_at_id, dim_std_identification_id, height, weight, age, dim_goal_id, dim_frequency_id, dim_focus_id, dim_gender_id)
    (SELECT 
        dim_created_at.id AS dim_created_at_id,
        dim_std_identification.id AS dim_std_identification_id,
        height,
        weight,
        age,
        dim_goal.id AS dim_goal_id,
        dim_frequency.id AS dim_frequency_id,
        dim_focus.id AS dim_focus_id,
        dim_gender.id AS dim_gender_id
    FROM staging_student
    INNER JOIN dim_created_at ON dim_created_at.date = to_date(staging_student.created_at,'YYYY-MM-DD')
    INNER JOIN dim_std_identification ON dim_std_identification.email = staging_student.email
    INNER JOIN dim_goal ON dim_goal.goal = staging_student.goal
    INNER JOIN dim_frequency ON dim_frequency.frequency = staging_student.frequency
    INNER JOIN dim_focus ON dim_focus.focus = staging_student.focus
    INNER JOIN dim_gender ON dim_gender.gender = staging_student.gender
    WHERE staging_student.processing = true);

DELETE FROM staging_student WHERE processing = true;

COMMIT;

