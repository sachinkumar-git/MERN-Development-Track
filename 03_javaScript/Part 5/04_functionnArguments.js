function printname(name, age) {
    console.log(name, age);
    console.log(`${name}'s age is ${age}.`);

}

printname("sachin",25);
printname("aman", 50);
printname("ram");


function avg(a,b,c){
    console.log((a+b+c)/3);
}

avg(3, 3, 3)


function table(a){
    for (let i=1 ; i<=10; i++){
        console.log(`${a} * ${i} = ${a*i} ` )
    }
}

table(5);