-- database: ./db.sqlite
CREATE TABLE
  "produtos" (
    "id" INT,
    "descontinuado" TINYINT,
    "nome" VARCHAR(100),
    "preco" DECIMAL(10, 2),
    "descricao" TEXT,
    "data_criacao" DATETIME
  );

INSERT INTO
  "produtos" (
    "id",
    "descontinuado",
    "nome",
    "preco",
    "descricao",
    "data_criacao"
  )
VALUES
  ('2', '0', 990, '200.5', 100, 2049);

SELECT
  typeof("id"),
  typeof(descontinuado),
  typeof(nome),
  typeof(preco),
  typeof(descricao),
  typeof("data_criacao")
FROM
  produtos;
