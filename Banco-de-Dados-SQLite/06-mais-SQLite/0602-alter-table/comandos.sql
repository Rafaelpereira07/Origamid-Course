-- database: ./db.sqlite

CREATE TABLE "users" (
  "id" INTEGER PRIMARY KEY,
  "name" TEXT NOT NULL,
  "e-mail" TEXT NOT NULL UNIQUE,
  "role" TEXT DEFAULT 'user',
  "created" INTEGER NOT NULL DEFAULT (strftime('%s','now'))
) STRICT;

-- Renomeia a coluna
ALTER TABLE "users" RENAME COLUMN "e-mail" TO "email";
-- Deleta a coluna
ALTER TABLE "users" DROP COLUMN "role";
-- Adiciona uma coluna
ALTER TABLE "users" ADD COLUMN "ads" INTEGER DEFAULT 0 CHECK ("ads" IN (0,1));
-- Renomeia a tabela
ALTER TABLE "users" RENAME TO "users_old";

-- 1 Desativar chaves estrangeiras
PRAGMA foreign_keys = OFF;

-- 2 Iniciar transaction
BEGIN;

-- 3 Guardar Index, Trigger e View
SELECT "type", "sql" FROM "sqlite_schema" WHERE "tbl_name"='users'

-- 4 Criar tabela nova
CREATE TABLE "users_new" (
  "id" INTEGER PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "created" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
) STRICT;

-- 5 Transferir dados
INSERT INTO "users_new" ("id", "nome", "email", "created")
SELECT "id", "name", "e-mail", datetime("created",'unixepoch')
FROM "users";

-- 6 Deletar tabela antiga
DROP TABLE "users";

-- 7 Renomear tabela nova
ALTER TABLE "users_new" RENAME TO "users";

-- 8/9 Recriar Index, Trigger e View. Modificar o que for necessário

-- 10 Checar se quebrou alguma foreign key
PRAGMA foreign_key_check;

-- 11 Commit
COMMIT;

-- 12 Reabilidatar chaves estrangeiras
PRAGMA foreign_keys = ON;
