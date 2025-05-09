//////////////shifting one element from left////////////////////////
const arr = [4,2,8,3,7];

let copy = arr[0];
for(let i= 0; i<arr.length; i++) {
    arr[i] = arr[i+1]
}

arr[arr.length-1] = copy;

// console.log(arr);


////////////shifting one element from left/////////////////

const arr1 = [3,5,8,2,6,9];
let copy1 = arr1[arr1.length-1];

for(let i =arr1.length-1; i>0; i--){
arr1[i] = arr1[i - 1]
}

arr1[0] = copy1
// console.log(arr1);


const arr2 =[2,3,5,6,7];
let k = 2;
let copy2 = arr2[0];

for(let j =0; j<k; j++){
    for(let i=0; i<arr2.length; i++){
        arr2[i] = arr2[i+1]
    }
}

arr2[arr2.length-1] = copy2;
console.log(arr2);












