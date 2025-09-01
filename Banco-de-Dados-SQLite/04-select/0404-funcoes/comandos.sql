-- database: ./db.sqlite
SELECT * FROM "produtos";
SELECT COUNT("categoria") FROM "produtos";
SELECT COUNT(*) AS "total" FROM "produtos";
SELECT SUM("estoque") AS "total_produtos" FROM "produtos";
SELECT SUM("preco" * "estoque") AS "valor_total_produtos" FROM "produtos";
SELECT ROUND(AVG("preco")) AS "media_preco" FROM "produtos";
SELECT MIN("preco") AS "produto_barato", "nome" FROM "produtos";
SELECT MAX("preco") AS "produto_caro", "nome" FROM "produtos";
SELECT LENGTH("nome") AS "tamanho", "nome" FROM "produtos" WHERE "tamanho" > 10;
SELECT TRIM(LOWER("nome")) AS "nome_min", "nome" FROM "produtos"
WHERE "nome_min" = TRIM(LOWER('  FOne blUETOOth   '));
SELECT SUBSTR("nome", 1, 4) FROM "produtos";
SELECT DATE('now');
SELECT TIME('now', 'localtime');
SELECT DATETIME('now', '+7 years');
SELECT STRFTIME('%Y-%m-%d %H:%M:%S','now');
SELECT * FROM "produtos" WHERE "criado"
BETWEEN DATE('2049-01-01') AND DATE('2049-01-01', '+6 month');
SELECT STRFTIME('%Y-%m', "criado") FROM "produtos";

CREATE TABLE "livros" (
  "id" INTEGER PRIMARY KEY,
  "nome" TEXT NOT NULL,
  "criado" TEXT NOT NULL DEFAULT (DATETIME('now', '-03:00'))
) STRICT;

INSERT INTO "livros" ("nome") VALUES ('SQLite para Iniciantes');
INSERT INTO "livros" ("nome") VALUES (TRIM('  SQLite Avançado    '));
