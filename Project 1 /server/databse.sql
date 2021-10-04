CREATE DATABASE AskAway;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY, 
    username VARCHAR(50),
    email VARCHAR(30),
    password VARCHAR(20)
);