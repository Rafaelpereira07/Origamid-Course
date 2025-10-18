-- database: ./db.sqlite
CREATE TABLE
  "certificates" (
    "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    "user_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "completed" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) WITHOUT ROWID,
  STRICT;

INSERT INTO
  "certificates" ("user_id", "course_id")
VALUES
  (1, 1);

SELECT *, rowid FROM "certificates";
