q1
const fs = require('fs');

// CREATE
fs.writeFile("student.txt", "Name: Payal", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");

        // READ
        fs.readFile("student.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Data:", data);

                // UPDATE
                fs.appendFile("student.txt", "\nCourse: CSE", (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("File updated");

                        // DELETE
                        fs.unlink("student.txt", (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("File deleted");
                            }
                        });
                    }
                });
            }
        });
    }
});

Q2
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

Q3
const express = require('express');

const app = express();

app.use(express.json());

let students = [];

//create

app.post('/students', (req,res) => {
  students.push(req.body);
  res.send('file created')
});

//read 
app.get('/students', (req,res) => {
  res.json(students);
});

//update
app.put('/students/:id', (req, res) => {
  students[req.params.id]= req.body;
  res.send('file updated')
});

//delete
app.delete('/students/:id', (req,res) => {
  students.splice(req.params.id,1);
  res.send('dile feleted')
});

app.listen(3000);




q4
const express = require('express');
const { DiffieHellmanGroup } = require('crypto');

const app = express();

app.use((req,res, next) => {
  console.log(req.method,req.url);
});

app.get('/',(req,res) => {
  res.send('home page');
});

app.listen(3000);



db.doctors.find{
    {
        $or:[
            {department: "Cardiology"},
            {fees: {$lt: 1000}}
        ]
    }
}

db.doctors.find({},{name:1,department:1,_id:0})

db.doctors.find().skip(2).limit(2)


$group:{
    _id:"$experience",
    totalSalary:{$sum:"$salary"},
    avgSalary:{$avg:"$salary"},
    maxSalary:{$max:"$salary"},
    minSalary:{$min:"$salary"}
    totalDoctors:{$sum:1}   
}

// hello