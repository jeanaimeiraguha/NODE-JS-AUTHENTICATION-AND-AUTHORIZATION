import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

const app = express();
// app.use(express())
app.use(express.json())
// const PORT = process.env.PORT || 3000;
// require("dotenv").config;
import { configDotenv } from 'dotenv';
// const db = mysql.createConnection({

//     hos:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME,
// })
db.connect((err)=>{
    if(err){
        console.error("Connection failed")
        return;
    }
    else{
    console.log("Connection succed")
    }
})