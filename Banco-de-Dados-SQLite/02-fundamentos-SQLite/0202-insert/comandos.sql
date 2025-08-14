-- database: ./db.sqlite
CREATE TABLE
  cursos (
    id INTEGER NOT NULL,
    nome TEXT NOT NULL,
    aulas INTEGER
  );

INSERT INTO
  cursos (id, nome, aulas)
VALUES
  (1, 'HTML', 10);

INSERT INTO
  cursos (nome, aulas)
VALUES
  ('CSS', 12);
