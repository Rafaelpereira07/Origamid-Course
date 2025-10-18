-- database: ./db.sqlite
CREATE TABLE
  "users" (
    "id" INTEGER PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "ads" INTEGER NOT NULL DEFAULT 0 CHECK ("ads" IN (0, 1)),
    "subscription" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) STRICT;

INSERT INTO
  "users" ("name", "email", "ads")
VALUES
  ('Rafael', 'rafael@email.com', 0);

INSERT INTO
  "users" ("name", "email", "ads")
VALUES
  ('Rafael', 'rafael@email.com', 1)
ON CONFLICT("email") DO NOTHING;

INSERT INTO
  "users" ("name", "email", "ads")
VALUES
  ('Rafael', 'rafael@email.com', 0)
ON CONFLICT("email") DO UPDATE SET "ads" = excluded."ads";

INSERT INTO
  "users" ("name", "email", "ads")
VALUES
  ('Rafael', 'rafael@email.com', 0)
ON CONFLICT("email") DO UPDATE SET "ads" = excluded."ads"
WHERE excluded."ads" != 0;
