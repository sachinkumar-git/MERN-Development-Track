let students = [
  {
    name: "shradha",
    marks: 95,
  },
  {
    name: "aman",
    marks: 94.4,
  },
  {
    name: "rajat",
    marks: 92,
  },
];

let gpa = students.map((el) => {
    return el.marks / 10;
});

students.forEach((students) => {
  console.log(students.gpa);
});