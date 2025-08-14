import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bullet',
  password: 'password',
  port: 5432
});

export default pool;