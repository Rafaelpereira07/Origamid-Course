import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('./lms.sqlite');

db.exec(/*sql*/ `
    PRAGMA foreign_keys = 1;
    PRAGMA journal_mode = DELETE;
    PRAGMA synchronous = NORMAL;

    PRAGMA cache_size = 2000;
    PRAGMA busy_timeout = 5000;
    PRAGMA temp_store = MEMORY;
  `);

db.exec(/*sql*/ `
    CREATE TABLE IF NOT EXISTS cursos (
      id INTEGER PRIMARY KEY,
      slug TEXT NOT NULL COLLATE NOCASE UNIQUE,
      nome TEXT NOT NULL,
      descricao TEXT NOT NULL
    ) STRICT;
  `);

db.exec(/*sql*/ `
    CREATE TABLE IF NOT EXISTS aulas (
      id INTEGER PRIMARY KEY,
      curso_id INTEGER NOT NULL,
      slug TEXT NOT NULL COLLATE NOCASE,
      nome TEXT NOT NULL,
      FOREIGN KEY(curso_id) REFERENCES cursos(id),
      UNIQUE(curso_id, slug)
    ) STRICT;
  `);

export function criarCurso({ slug, nome, descricao }) {
  try {
    db.prepare(
      /*sql*/ `
      INSERT OR IGNORE INTO cursos
        (slug, nome, descricao)
      VALUES
        (?,?,?)
    `,
    ).get(slug, nome, descricao);
  } catch (e) {
    console.log(error);
    return null;
  }
}

export function criarAula({ curso_id, slug, nome }) {
  try {
    db.prepare(
      /*sql*/ `
      INSERT OR IGNORE INTO aulas
        (curso_id, slug, nome)
      VALUES
        (?,?,?)
    `,
    ).get(curso_id, slug, nome);
  } catch (e) {
    console.log(error);
    return null;
  }
}

export function listarCursos() {
  try {
    return db.prepare(/*sql*/ `SELECT * FROM cursos`).all();
  } catch (e) {
    console.log(error);
    return null;
  }
}

export function listarCurso(slug) {
  try {
    return db.prepare(/*sql*/ `SELECT * FROM cursos WHERE slug = ?`).get(slug);
  } catch (e) {
    console.log(error);
    return null;
  }
}

export function listarAulas(slug) {
  try {
    return db
      .prepare(
        /*sql*/ `
        SELECT * FROM aulas
        WHERE curso_id = (SELECT id FROM cursos WHERE slug = ?)
      `,
      )
      .all(slug);
  } catch (e) {
    console.log(error);
    return null;
  }
}

export function listarAula(curso, slug) {
  try {
    return db
      .prepare(
        /*sql*/ `
        SELECT * from aulas
        WHERE curso_id = (SELECT id FROM cursos WHERE slug = ?)
        AND slug = ?
      `,
      )
      .get(curso, slug);
  } catch (e) {
    console.log(error);
    return null;
  }
}
