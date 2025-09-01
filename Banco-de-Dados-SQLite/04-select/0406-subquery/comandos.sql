-- database: ./db.sqlite
SELECT AVG("preco") FROM "produtos";
SELECT * FROM "produtos" WHERE "preco" < (SELECT AVG("preco") FROM "produtos");

SELECT * FROM "lessons"
WHERE "course_id" =
(SELECT "id" FROM "courses" WHERE "slug" = 'javascript-basico');

WITH "preco_medio" AS (
  SELECT AVG("preco") AS "media" FROM "produtos"
)
SELECT * FROM "produtos" WHERE "preco" > (SELECT "media" FROM "preco_medio");
