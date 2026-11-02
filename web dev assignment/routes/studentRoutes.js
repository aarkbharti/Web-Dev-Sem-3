const express = require("express");
const router = express.Router();

let students = [
  { id: 1, name: "Aark", age: 19, course: "AI/ML" },
  { id: 2, name: "Rahul", age: 20, course: "CSE" }
];

router.get("/", (req, res) => {
  try {
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", (req, res) => {
  try {
    const { name, age, course } = req.body;

    if (
      typeof name !== "string" || !name.trim() ||
      !Number.isInteger(age) || age <= 0 ||
      typeof course !== "string" || !course.trim()
    ) {
      return res.status(400).json({ error: "Invalid student data" });
    }

    const id = students.length
      ? Math.max(...students.map(s => s.id)) + 1
      : 1;

    const student = { id, name, age, course };
    students.push(student);

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const { name, age, course } = req.body;

    if (
      typeof name !== "string" || !name.trim() ||
      !Number.isInteger(age) || age <= 0 ||
      typeof course !== "string" || !course.trim()
    ) {
      return res.status(400).json({ error: "Invalid student data" });
    }

    student.name = name;
    student.age = age;
    student.course = course;

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Student not found" });
    }

    students.splice(index, 1);

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;