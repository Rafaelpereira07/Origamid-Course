-- database: ./db.sqlite
CREATE TABLE
  "cursos" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "aulas" INTEGER
  );

INSERT INTO
  "cursos" ("id", "nome", "aulas")
VALUES
  (2, 'CSS', 12),
  (3, 'JavaScript', 14);

DELETE FROM cursos WHERE "id" = 1;
