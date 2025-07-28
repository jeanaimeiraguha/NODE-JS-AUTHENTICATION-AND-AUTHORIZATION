import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

const app = express();
// const PORT = process.env.PORT || 3000;
require("dotenv").config;
const db = mysql.createConnection({

    hos:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})