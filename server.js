const express = require('express');
const employees = require('./data/employees.js');
const app = express()

app.use(express.json()); // data parse coming as json

app.use("/",require("/",employeeRoutes));

app.listen(3000,()=>console.log(`server is running on port 3000`))