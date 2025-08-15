-- database: ./db.sqlite
CREATE TABLE
  "users" (
    "id" INTEGER PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE COLLATE NOCASE,
    "created" TEXT DEFAULT CURRENT_TIMESTAMP
  ) STRICT;

INSERT INTO
  "users" ("id", "name", "password", "email")
VALUES
  (42, 'Rafael', 'rafael123', 'origamid@email.com');

CREATE TABLE
  "courses" (
    "id" INTEGER PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE, -- +COLLATE NOCASE
    "title" TEXT NOT NULL UNIQUE,
    "description" TEXT, -- +NOT NULL
    "aulas" INTEGER NOT NULL,
    "horas" INTEGER NOT NULL,
    "created" TEXT DEFAULT CURRENT_TIMESTAMP
  ) STRICT;

INSERT INTO
  "courses" ("slug", "title", "description", "aulas", "horas")
VALUES
  (
    'javascript-basico',
    'JavaScript Básico',
    'Aprenda os fundamentos da linguagem JavaScript.',
    20,
    5
  );

CREATE TABLE
  "lessons" (
    "id" INTEGER PRIMARY KEY,
    "course_id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL UNIQUE, -- +COLLATE NOCASE -UNIQUE
    "title" TEXT NOT NULL UNIQUE,
    "materia" TEXT NOT NULL,
    "materia_slug" TEXT NOT NULL,
    "seconds" INTEGER NOT NULL,
    "video" TEXT NOT NULL,
    "description" TEXT, -- +NOT NULL
    "lesson_order" INTEGER NOT NULL,
    "free" INTEGER DEFAULT 0 CHECK ("free" IN (0, 1)),
    "created" TEXT DEFAULT CURRENT_TIMESTAMP,
    -- +UNIQUE ("couse_id", "slug")
    FOREIGN KEY (course_id) REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE
  ) STRICT;

INSERT INTO
  "lessons" (
    "course_id",
    "slug",
    "title",
    "materia",
    "materia_slug",
    "seconds",
    "video",
    "description",
    "lesson_order",
    "free"
  )
VALUES
  (
    1,
    'variaveis-let-const',
    'Variáveis: let e const',
    'Fundamentos',
    'fundamentos',
    480,
    'variaveis.mp4',
    'Entenda a diferença entre let, const e var.',
    3,
    1
  );

CREATE TABLE
  "lessons_completed" (
    "user_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "completed" TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("course_id") REFERENCES "courses" ("id"),
    FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id"),
    PRIMARY KEY ("user_id", "course_id", "lesson_id")
  );

INSERT INTO
  "lessons_completed" ("user_id", "course_id", "lesson_id")
VALUES
  (42, 1, 101);

CREATE TABLE
  "certificates" (
    "id" TEXT PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "completed" TEXT DEFAULT CURRENT_TIMESTAMP,
    UNIQUE ("user_id", "course_id"),
    FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("course_id") REFERENCES "courses" ("id")
  );

INSERT INTO
  "certificates" ("id", "user_id", "course_id")
VALUES
  ('aq32scsqd', 42, 1);
