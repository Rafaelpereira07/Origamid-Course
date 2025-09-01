-- database: ./db.sqlite
SELECT * FROM "produtos" ORDER BY "preco" DESC;
SELECT * FROM "produtos" ORDER BY "categoria", "preco";
SELECT * FROM "produtos" ORDER BY "criado";

SELECT COUNT(*) AS "total", "categoria"
FROM "produtos" GROUP BY "categoria" ORDER BY "total";

SELECT AVG("preco") AS "preco_medio", "categoria"
FROM "produtos" GROUP BY "categoria" ORDER BY "preco_medio";

SELECT STRFTIME('%Y-%m',"criado") AS "ano", COUNT(*) AS "total"
FROM "produtos" GROUP BY "ano";

SELECT "categoria", COUNT(*) AS "total"
FROM "produtos" GROUP BY "categoria" HAVING "total" = 1;
