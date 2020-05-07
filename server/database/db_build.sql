BEGIN;

  DROP TABLE IF EXISTS link
  CASCADE;


CREATE TABLE link
(
  id serial primary key ,
  name VARCHAR(100) ,
  img TEXT,
  description VARCHAR ,
  url TEXT NOT NULL
);


COMMIT;
