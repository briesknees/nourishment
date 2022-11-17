import config from "../constants/config";
import { Pool } from "pg";

export const pool = new Pool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: true,
});

export const db = {
  query: async function query(
    text: string,
    params?: string[],
    callback?: any
  ): Promise<any> {
    console.log("SQL Query Executed:", text);
    console.log("SQL Params:", params);
    return pool.query(text, (params = []), callback);
  },
};
