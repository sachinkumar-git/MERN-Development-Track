let nums = [ 2,3,4,5,3,4,7,8,1,2];

// let max = -1;

// for (let i = 0; i<nums.length ; i++){
//     if(max < nums[i]){
//         max = nums[i];
//     }
// }

// console.log(max)

let result = nums.reduce((max,el) => {
    if(el>max){
        return el;
    } else {
        return max;
    }
});


console.log(result);