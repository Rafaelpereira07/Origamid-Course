-- database: ./db.sqlite
CREATE TABLE
  "usuario" (
    "id" INTEGER PRIMARY KEY,
    "email" TEXT NOT NULL COLLATE NOCASE UNIQUE,
    "nome" TEXT NOT NULL
  ) STRICT;

DROP TABLE "usuario";

INSERT INTO
  "usuario" ("email", "nome")
VALUES
  ('Rafael@email.com', 'Rafael'),
  ('Andre@email.com', 'André');

CREATE TABLE
  "certificados" (
    "id" INTEGER PRIMARY KEY,
    "usuario_id" INTEGER NOT NULL,
    "curso_id" INTEGER NOT NULL,
    UNIQUE ("usuario_id", "curso_id")
  ) STRICT;

DROP TABLE "certificados";

INSERT INTO
  "certificados" ("usuario_id", "curso_id")
VALUES
  (2, 1);

-- restricoes 2
CREATE TABLE
  "usuario" (
    "id" INTEGER PRIMARY KEY,
    "email" TEXT NOT NULL COLLATE NOCASE UNIQUE,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'usuario' CHECK ("tipo" IN ('usuario', 'admin')),
    "vitalicio" INTEGER DEFAULT 0 CHECK ("vitalicio" IN (0, 1)),
    "criado" TEXT DEFAULT CURRENT_TIMESTAMP
  ) STRICT;

DROP TABLE "usuario";

INSERT INTO
  "usuario" ("email", "nome", "tipo", "vitalicio")
VALUES
  ('rafael3@email.com', 'Rafael', 'usuario', 3);
