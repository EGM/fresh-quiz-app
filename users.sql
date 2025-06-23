CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name text,
  email text,
  password text
);

INSERT INTO users (name,email,password)
VALUES
(1,'John','jladuke@palmcoastgov.com','$2a$10$fJdvRB9OhGXzIhDVM8y7c.K6wp3IBvRp0ycEwLo8T8y6EBryi2tXi'),
(2,'Dan','dniemann@palmcoastgov.com','$2a$10$JgqBBxQAsi3I.p1D./Iul.mT66l/5qp2ujBb9WrLalprWB6BL/g.u'),
(3,'Eric','eboucher@palmcoastgov.com','$2a$10$jEYNp1hrtMPAZymVwzXtnebW2W5O7MxglERkcLre/ewHafBM5JBIK');
