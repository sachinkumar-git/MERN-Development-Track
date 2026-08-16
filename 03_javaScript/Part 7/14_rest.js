// not clearly understand this concept 

function sum (...args){
    for(let i = 0; i<args.length; i++){
        console.log("you gave us: ", args[i]);
    }
}

function min (){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);
}

sum(1,2,3,5,6,5)
// min();