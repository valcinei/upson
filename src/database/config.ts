// @ts-nocheck
const path = require('path')

require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })

import knex from "knex";

const DB_HOST=process.env.DB_HOST
const DB_PORT=process.env.DB_PORT
const DB_PASS=process.env.DB_PASS
const DB_USER=process.env.DB_USER
const DB_CLIENT=process.env.DB_CLIENT
const DB_NAME=process.env.DB_NAME
const DB_FILE_PATH=process.env.DB_FILE_PATH
const DB_SID=process.env.DB_SID


const connectString = `(DESCRIPTION = 
  (ADDRESS_LIST = (ADDRESS =   (PROTOCOL = TCP)(HOST =
  ${DB_HOST})(PORT =
  ${DB_PORT})) ) (CONNECT_DATA =
  (SID = ${DB_SID}) ) )`
const filename = DB_FILE_PATH;

let connection = {
  host : DB_HOST,
  user : DB_USER,
  password :DB_PASS,
  database : DB_NAME,
  port: DB_PORT
} as any;

if(connectString){
  connection = {...connection, connectString}
}

if(!DB_FILE_PATH){
  connection = {...connection, filename}
}


const contextDatabase = knex({
    client: DB_CLIENT,
    connection,

  });

  export { contextDatabase }