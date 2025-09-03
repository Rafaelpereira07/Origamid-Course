-- database: ./db.sqlite
CREATE VIEW "lessons_completed_full" AS
SELECT "u"."email", "c"."title" AS "course", "l"."title", "lc"."completed" FROM "lessons_completed" AS "lc"
JOIN "users" AS "u" ON "u"."id" = "lc"."user_id"
JOIN "courses" AS "c" ON "c"."id" = "lc"."course_id"
JOIN "lessons" AS "l" ON "l"."id" = "lc"."course_id";

DROP  VIEW IF EXISTS "lessons_completed_full";
SELECT * FROM "sqlite_schema" WHERE "type" = 'view';
EXPLAIN QUERY PLAN SELECT * FROM "lessons_completed_full" WHERE "email" = 'pedro@email.com';
