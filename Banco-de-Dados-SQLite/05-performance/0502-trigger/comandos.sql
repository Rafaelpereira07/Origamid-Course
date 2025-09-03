-- database: ./db.sqlite
SELECT *, STRFTIME('%Y', "created")  AS "ano" FROM "users";

CREATE TABLE "users2" (
  "id" INTEGER PRIMARY KEY,
  "nome" TEXT NOT NULL,
  "sobrenome" TEXT NOT NULL,
  "nome_completo" TEXT AS (nome || ' ' || sobrenome) STORED
) STRICT;

INSERT INTO "users2" ("nome", "sobrenome") VALUES ('Rafael', 'Pacheco');
