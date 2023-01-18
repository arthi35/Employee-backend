require('dotenv').config();

const express=require('express');//import express
const db=require('./db/connect');
const employeeRoutes=require('./routes/employees.route')//Importing Routes
const app=express();//initiate express
// const db=require('./db/connect');

db();

app.use(express.json());//to parse json objects
app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.get('/hello',(req,res)=>{
    res.send("Hello World")
})
//custom middleware
app.use(employeeRoutes);

const PORT=process.env.PORT ||4000
app.listen(PORT,()=>{//listening the express
    console.log(`App is Running on ${PORT}`)
})
