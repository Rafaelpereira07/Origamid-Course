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
  (1, 'HTML', 10),
  (2, 'CSS', 12),
  (3, 'JavaScript', 14);

DELETE FROM "cursos";

SELECT * FROM "cursos";
SELECT "id", "nome" FROM "cursos" LIMIT 2;
SELECT * FROM "cursos" WHERE "id" >= 2;
SELECT * FROM "cursos" WHERE "id" != 1;
SELECT * FROM "cursos" WHERE "nome" = 'CSS';
SELECT * FROM "cursos" WHERE "id" = 1 AND "aulas" > 11;
SELECT * FROM "cursos" WHERE "id" = 1 OR "aulas" > 11;
SELECT * FROM "cursos" WHERE "id" > 1 LIMIT 1;
