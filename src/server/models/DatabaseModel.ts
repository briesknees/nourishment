import config from "../constants/config";
import {
  CreateTableQuery,
  InsertQuery,
  SelectQuery,
} from "../../types/database";
const { Pool } = require("pg");

const pool = new Pool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: true,
});

export async function SelectRecords(params: SelectQuery) {
  const attributes: string[] = [];
  params.attributes
    ? params.attributes.forEach((e, i) => {
        attributes.push(`$${i + 1}`);
      })
    : false;

  const attributesString = attributes.join(", ");

  let str = "SELECT ";
  if (attributesString) {
    str += `${attributes} FROM ${params.table}`;
  } else {
    str += ` * FROM ${params.table}`;
  }

  if (params.conditions && params.conditions.where) {
    str += ` WHERE ${params.conditions.where}`;
  }

  const queryParams: string[] = [];
  params.attributes?.forEach( e => {
    queryParams.push(`${e.value}`)
  })

  str += ";";
  const response = await query(str, queryParams);
  console.log(response);
  return response;
}

export async function CreateTable(params: CreateTableQuery) {
  // let str = `CREATE TABLE ${params.name} `;
  // let attributesString = "(";
  // const queryParams: string[] = [];

  // params.attributes.forEach((e, i) => {
  //   attributesString += `$${i + 1} ${e[1]}`;
  //   i < params.attributes.length - 1 ? (attributesString += ",") : null;
  //   queryParams.push(e[0]);
  // });

  // str += `${attributesString}` + ");";

  // // console.log( await query('SELECT $1 FROM inventory;', ["*"]));
  // return query(str, queryParams);
}

export function InsertRecords(params: InsertQuery) {
  // let str = `CREATE TABLE ${params.name} `;
  // let attributesString = "(";
  // const queryParams: string[] = [];

  // params.attributes.forEach((e, i) => {
  //   attributesString += `$${i + 1} ${e[1]}`;
  //   i < params.attributes.length - 1 ? (attributesString += ",") : null;
  //   queryParams.push(e[0]);
  // });

  // str += `${attributesString}` + ");";

  // // console.log( await query('SELECT $1 FROM inventory;', ["*"]));
  // return query(str, queryParams);
}

export default function query(text: string, params?: string[], callback?: any) {
  console.log("SQL Query Executed:", text);
  console.log("SQL Params:");
  console.log(params);
  return pool.query(text, params, callback);
}
