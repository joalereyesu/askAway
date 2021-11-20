

CREATE TABLE questions(
    user_id SERIAL PRIMARY KEY, 
    username VARCHAR(50),
    question VARCHAR(200),
    category VARCHAR(50)
);