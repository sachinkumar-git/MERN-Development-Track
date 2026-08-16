let arr = [1,2,3,4,5,6,7,8,9];

let newarr = [...arr];

console.log(newarr);


let cha = [..."apna"];
console.log(cha);

let comb = [...arr, ...cha]; // order matters
console.log(comb)
