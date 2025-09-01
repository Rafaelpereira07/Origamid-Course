-- database: ./db.sqlite
-- 1
SELECT * FROM "lessons" WHERE "course_id" =
(SELECT "id" FROM "courses" WHERE "slug" = 'html-para-iniciantes')
ORDER BY "lesson_order";

-- 2
SELECT SUM("seconds") FROM "lessons" WHERE "course_id" =
(SELECT "id" FROM "courses" WHERE "slug" = 'css-animacoes');

-- 3
SELECT "course_id", COUNT(*) AS "total_aulas"
FROM "lessons" GROUP BY "course_id";

-- 4
SELECT "course_id", SUM("seconds") AS "total_segundos"
FROM "lessons" GROUP BY "course_id" ORDER BY "total_segundos" DESC;

-- 5
SELECT "course_id", SUM("seconds") AS "total_segundos"
FROM "lessons" GROUP BY "course_id" HAVING "total_segundos" > 2300 ORDER BY "total_segundos" DESC;

-- 6
SELECT "c"."title", SUM("l"."seconds") AS "total_segundos"
FROM "lessons" AS "l"
JOIN "courses" AS "c" ON "l"."course_id" = "c"."id"
GROUP BY "c"."id" ORDER BY "total_segundos" DESC
;

-- 7
SELECT "id" FROM "certificates" WHERE "user_id" =
(SELECT "id" FROM "users" WHERE "email" = 'mariana@email.com');

-- 8
SELECT "lc"."user_id", "l"."title", "lc"."completed" FROM "lessons" AS "l"
LEFT JOIN "lessons_completed" AS "lc" ON "lc"."lesson_id" = "l"."id"
AND "lc"."user_id" = (SELECT "id" FROM "users" WHERE "email" = 'lucas@email.com');

-- 9
SELECT * FROM "lessons" WHERE "course_id" = (SELECT "course_id" FROM "lessons" WHERE "slug" = 'funcoes-e-escopo')
AND "lesson_order" IN (
  (SELECT "course_id" FROM "lessons" WHERE "slug" = 'funcoes-e-escopo') - 1,
  (SELECT "course_id" FROM "lessons" WHERE "slug" = 'funcoes-e-escopo'),
  (SELECT "course_id" FROM "lessons" WHERE "slug" = 'funcoes-e-escopo') + 1
)
ORDER BY "lesson_order";

-- 9 alternativo
WITH "current" AS (
  SELECT "course_id", "lesson_order"
  FROM "lessons"
  WHERE "slug" = 'funcoes-e-escopo'
)
SELECT * FROM "lessons" WHERE "course_id" = (SELECT "course_id" FROM "current")
AND "lesson_order" IN (
  (SELECT "course_id" FROM "current") - 1,
  (SELECT "course_id" FROM "current"),
  (SELECT "course_id" FROM "current") + 1
)
ORDER BY "lesson_order";
