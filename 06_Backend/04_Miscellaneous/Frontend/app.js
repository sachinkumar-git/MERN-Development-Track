// factory function 

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };

//     return person;
// }


// let p1 = PersonMaker("adam", 25); //copy
// let p2 = PersonMaker("eve", 25);//copy


// constructor - doesn't return anything & start with capital letters 

// function Person(name, age) {
//         this.name = name;
//         thi.age = age;
//     }

// let p1 = new Person ("adam", 25); //copy
// let p2 = new Person("eve", 25);//copy


// class 
class Person {
    constructor (name, age) {

        this.name = name;
        thi.age = age;

    }

    talk () {  

            console.log(`Hi, ,my name is ${this.name}`);
    
    }
      
    }

let p1 = new Person ("adam", 25); //copy
let p2 = new Person("eve", 25);//copy
