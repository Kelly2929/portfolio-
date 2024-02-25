const express = require('express');
const knex = require('knex');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'tributes_to_victims'
  }
});


















