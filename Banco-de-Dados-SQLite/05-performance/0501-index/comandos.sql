-- database: ./dbGrande.sqlite
EXPLAIN QUERY PLAN SELECT * FROM "products" WHERE "sku" = 'UDCY3PCPCP3D';
SELECT * FROM "products" WHERE "sku" = 'UDCY3PCPCP3D';
CREATE INDEX "idx_products_created" ON "products" ("sku");

SELECT COUNT(DISTINCT "sku") AS "card" FROM "products";
SELECT COUNT(DISTINCT "vitalicio") AS "card" FROM "users";

CREATE INDEX "idx_users_name_vitalicio" ON "users" ("nome") WHERE "vitalicio" = 1;
DROP INDEX "idx_users_name_vitalicio";
SELECT * FROM "users" WHERE "nome" = 'Ana Júlia Carvalho';
