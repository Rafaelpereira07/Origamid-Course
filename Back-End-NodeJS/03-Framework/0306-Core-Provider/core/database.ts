import { DatabaseSync, type StatementSync } from 'node:sqlite';

const db = new DatabaseSync('./lms.sqlite');

export class Database extends DatabaseSync {
  queries: Record<string, StatementSync>;
  constructor(path: string) {
    super(path);
    this.queries = {};
    db.exec(/*sql*/ `
    PRAGMA foreign_keys = 1;
    PRAGMA journal_mode = DELETE;
    PRAGMA synchronous = NORMAL;

    PRAGMA cache_size = 2000;
    PRAGMA busy_timeout = 5000;
    PRAGMA temp_store = MEMORY;
  `);
  }
  query(sql: string) {
    console.log(this.queries);
    if (!this.queries[sql]) {
      this.queries[sql] = this.prepare(sql);
    }
    return this.queries[sql];
  }
}
