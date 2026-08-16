//  [1,2,3,4].reduce ((res,el)=> (res+el));

//sum of array 
let nums =  [1,2,3,4];
let finalval = nums.reduce ((res,el)=> {
    console.log(res);
    return res+el});
console.log(finalval)