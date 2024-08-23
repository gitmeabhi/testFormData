const db = require('better-sqlite3')('sampleDatabase.db')

const createTable =() =>{
  sql = `
  CREATE TABLE ramya(
    id INTEGER PRIMARY KEY,
    role TEXT NOT null,
    age INTEGER
)
  `
  db.prepare(sql).run()
} 

createTable()