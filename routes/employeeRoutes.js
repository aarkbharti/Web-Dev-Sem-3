const express = require('express');
const router = express.Router();

///read operations
router.get("/employees",getEmployees)
//get employee by id
router.get("/employees/:id",getEmployeeById)
//create employee
router.post("/employees",addEmployee)
//update employee
router.put("/employees/:id",updateEmployee)
//delete employee
app.delete("/employees/:id",deleteEmployee)
app.listen(3000,()=>console.log(`server is running on port 3000`))