-- database: ./db.sqlite
CREATE TABLE
  "users" (
    "id" INTEGER PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE
  ) STRICT;

CREATE TABLE
  "users_config" (
    "user_id" INTEGER PRIMARY KEY REFERENCES "users" ("id") ON DELETE CASCADE,
    "config" TEXT NOT NULL CHECK (json_valid("config"))
  ) STRICT;

INSERT INTO
  "users" ("email")
VALUES
  ('maria@origamid.com');

INSERT INTO
  users_config ("config")
VALUES
  (json('{"video":2,"speed":1,"font":"arial", "ads": 1}'));

DELETE FROM "users_config"
WHERE
  "user_id" = 2;

INSERT INTO
  users_config ("config")
VALUES
  (
    json_object('video', 2, 'speed', 1, 'font', 'arial')
  );

SELECT
  json_extract("config", '$.font') AS font
FROM
  "users_config";

SELECT
  typeof(json_extract("config", '$.speed')) AS speed
FROM
  "users_config";

SELECT
  "config" ->> '$.font' AS font,
  "config" ->> '$.speed' AS speed
FROM
  "users_config";

SELECT
  *
FROM
  "users_config"
WHERE
  "config" ->> '$.font' = 'arial';

UPDATE "users_config"
SET
  "config" = json_set("config", '$.font', 'helvetica')
WHERE
  "user_id" = 1;

UPDATE "users_config"
SET
  "config" = json_remove("config", '$.font')
WHERE
  "user_id" = 1;

UPDATE "users_config"
SET
  "config" = json_insert("config", '$.ads', 0);

ALTER TABLE "users_config"
ADD COLUMN "ads" INTEGER AS ("config" ->> '$.ads');


SELECT '[1,2,3,4,5]'->> '$[3]';
SELECT json_array('pt', 'en', 'es') ->> '$[0]';
SELECT json_set(json_array('pt', 'en', 'es'), '$[1]', 'it');
