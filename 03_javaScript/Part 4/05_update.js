let student = {
    name: "sachin",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

console.log(student);
student.city = "Mumbai";
console.log(student);

student.gender = "Male";
console.log(student);


student.marks ="A+";
console.log(student);


delete student.marks;
console.log(student);
