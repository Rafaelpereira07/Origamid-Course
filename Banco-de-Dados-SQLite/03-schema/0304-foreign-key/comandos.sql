-- database: ./db.sqlite
PRAGMA foreign_keys;

CREATE TABLE
  "cursos" ("id" INTEGER PRIMARY KEY, "nome" TEXT) STRICT;

INSERT INTO
  "cursos" ("nome")
VALUES
  ('HTML');

CREATE TABLE
  "aulas" (
    "id" INTEGER PRIMARY KEY,
    "curso_id" INTEGER,
    "nome" TEXT,
    FOREIGN KEY ("curso_id") REFERENCES "cursos" ("id")
  ) STRICT;

INSERT INTO
  "aulas" ("curso_id", "nome")
VALUES
  ('1', 'Fundamentos do HTML');
