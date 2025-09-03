-- database: ./db.sqlite
SELECT COUNT(*) FROM "users";

CREATE TABLE "stats" (
  "name" TEXT PRIMARY KEY,
  "value" INTEGER NOT NULL
)STRICT;

INSERT INTO "stats" ("name", "value") VALUES ('user_count', (SELECT COUNT(*) FROM "users"));

CREATE TRIGGER "trg_users_insert"
AFTER INSERT ON "users"
BEGIN
  UPDATE "stats" SET "value" = "value" + 1 WHERE "name" = 'user_count';
END;

CREATE TRIGGER "trg_users_delete"
AFTER DELETE ON "users"
BEGIN
  UPDATE "stats" SET "value" = "value" - 1 WHERE "name" = 'user_count';
END;

SELECT * FROM "sqlite_schema" WHERE "type" = 'trigger';

INSERT INTO "users" ("name", "password", "email") VALUES ('Rafael', '123456', 'rafel@email.com');

DELETE FROM "users" WHERE "email" = 'rafel@email.com';


CREATE TABLE "user_changes" (
  "id" INTEGER PRIMARY KEY,
  "user_id" INTEGER NOT NULL,
  "old_email" TEXT NOT NULL,
  "new_email" TEXT NOT NULL,
  FOREIGN KEY ("user_id") REFERENCES "users" ("id")
);

CREATE TRIGGER "trg_log_email_change"
BEFORE UPDATE OF "email" ON "users"
WHEN lower(OLD."email") <> lower(NEW."email")
BEGIN
  INSERT INTO "user_changes" ("user_id", "old_email", "new_email")
  VALUES (OLD."id", OLD."email", NEW."email");
END;

UPDATE "users" SET "email" = 'carlos@email.com' WHERE "id" = 1;





SELECT COUNT(*) FROM "lessons_completed"
WHERE "user_id" = 11 AND "course_id" = 1;

SELECT COUNT(*) FROM "lessons" WHERE "course_id" = 1;

CREATE TRIGGER "trg_create_certificate"
AFTER INSERT ON "lessons_completed"
WHEN (
  (SELECT COUNT(*) FROM "lessons_completed"
  WHERE "user_id" = NEW."user_id" AND "course_id" = NEW."course_id")
  =
  (SELECT COUNT(*) FROM "lessons" WHERE "course_id" = NEW."course_id")
)
BEGIN
  INSERT OR IGNORE INTO "certificates" ("id", "user_id", "course_id")
  VALUES (lower(hex(randomblob(16))), NEW."user_id", NEW."course_id" );
END;

INSERT INTO "lessons_completed" ("user_id", "course_id", "lesson_id")
VALUES
  (11, 1, 1),
  (11, 1, 2),
  (11, 1, 3),
  (11, 1, 4),
  (11, 1, 5);

DROP TRIGGER 'nome_trigger';
