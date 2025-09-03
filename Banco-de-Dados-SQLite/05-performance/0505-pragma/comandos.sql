-- database: ./db.sqlite
PRAGMA pragma_list;
PRAGMA table_list;
PRAGMA function_list;
PRAGMA page_size;

PRAGMA foreign_keys = 1;
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;

PRAGMA busy_timeout = 5000;
PRAGMA cache_size = 2000;
PRAGMA temp_store = MEMORY;

PRAGMA optimize = 0x10002;
PRAGMA analysis_limit = 1000;

VACUUM;
