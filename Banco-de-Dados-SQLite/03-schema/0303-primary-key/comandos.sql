-- database: ./db.sqlite
CREATE TABLE
  "cursos" (
    "id" INTEGER PRIMARY KEY,
    "nome" TEXT,
    "preco" INTEGER
  ) STRICT;

INSERT INTO
  "cursos" ("nome", "preco")
VALUES
  ('HTML', 1000);

SELECT "rowid", * FROM "cursos";
