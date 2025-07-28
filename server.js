import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

// const app = express();
// app.use(express())
// app.use(express.json())
// // const PORT = process.env.PORT || 3000;
// // require("dotenv").config;
// import { configDotenv } from 'dotenv';
const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:""
})
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

db.connect((err)=>{
    if(err){
        console.error("Connection failed")
        return;
    }
    else{
    console.log("Connection succed")
    }
})