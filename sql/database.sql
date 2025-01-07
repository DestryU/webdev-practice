create table characters (
    id serial primary key,
    name varchar(255) not null,
    race varchar(255),
    class varchar(255),
    level int,
    backstory text
);
