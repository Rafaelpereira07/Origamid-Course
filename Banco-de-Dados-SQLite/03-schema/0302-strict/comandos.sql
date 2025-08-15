-- database: ./db.sqlite

CREATE TABLE "cursos" (
  "id" INTEGER,
  "nome" TEXT,
  "preco" INTEGER
)STRICT;

INSERT INTO cursos (id, nome, preco) VALUES ('1', 'HTML', 1000);
