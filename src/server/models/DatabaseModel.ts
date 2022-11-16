import config from "../constants/config";
import {
  CreateTableQuery,
  InsertQuery,
  SelectQuery,
} from "../../types/database";
const { Pool } = require('pg');

const pool = new Pool({
  host: config.host,
  user: config.user,
  password: config.password,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export function SelectRecords(params: SelectQuery) {
  const attributes = [];
  params.attributes ? params.attributes.forEach((e, i) => {
    
  })

  let query = "SELECT";
  query += attributes
    ? ` ${attributes} FROM ${params.table}`
    : `* FROM ${params.table}`;

  if (params.conditions && params.conditions.where) {
    query += ` WHERE ${params.conditions.where}`;
  }

  query += ";";
}

export function CreateTable(params: CreateTableQuery) {

}

export function InsertRecords(params: InsertQuery) {

}

module.exports = {
  query: (text: string, params: string, callback: any) => {
    console.log("SQL Query Executed:", text);
    return pool.query(text, params, callback);
  },
};
