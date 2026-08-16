const student = {
    name: "aman",
    marks: 95,
    prop: this, // globalscope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.name;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this);
        }, 2000);
    },
};

// console.log(student);
console.log(student.getName());
console.log(student.getMarks());


const a = 5; // globalscope 

