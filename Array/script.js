// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }

// const nameFinder = (students, studentName) => {
//     for(let i= 0; i<= students.length; i++){
//         if(students[i] === studentName) return studentName;
//         else if(studentName === "") return "Enter name here!"
//     }

//     return 'Name not found'
// }

// const students = ["eric", "kabir", "naved"]

// console.log(nameFinder(students, ''));

// sum of All Numbers

// const allSummer = (sums) => {
//   let num = 0;
//   for (let i = 0; i <= sums.length - 1; i++) {
//     num = num + sums[i];
//   }
//   return num;
// };

// let add = [1, 2, 3];

// console.log(allSummer(add));

//twoSum with target value
// let box = [2, 3, 4, 5, 9,20];
// let target = 10;
// let seen = {}; // an object to keep track of previously seen numbers

// for (let i = 0; i < box.length; i++) {
//   let current = box[i];
//   let needed = target - current;

//   if (seen[needed] !== undefined) {
//     console.log("added", needed, "+", current);
//     break;
//   }

//   seen[current] = i;
// }

///find the max elem
function findMax(arr) {
  let first = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (first < arr[i]) {
      first = arr[i];
    }
  }
  console.log(first);
}

let result = [3, 8, 1, 8, 4, 44, 4, 4];

// findMax(result);

//find second max

function secMax(arr) {
  let first = Math.max(arr[0], arr[1]);
  let second = Math.min(arr[0], arr[1]);
  
  for(let i =2; i< arr.length; i++ ){
    if(first < arr[i]){
      second = first;
      first = arr[i]
    }else if(second < arr[i] && first != arr[i]){
      second = arr[i]
    }
  }
  return console.log(second)
}

const result1 = [40, 9, 38,38, 39, 9, 74];
// secMax(result1)

//positioned 0 to rignt and 1 to left
function positioned(arr){
  let i = 0;
  let j = 0;

  while(i<arr.length){
    if(arr[i]===1){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      j++
    }
    i++
  }
  return console.log(arr)
}

let result2 =[0,1,1,0,1,0,0,1,0]
// positioned(result2)


///shift one elem to the right
function rightShift(arr) {
  let last = arr[0]
  for(let i =0; i < arr.length; i++){
    // let temp = arr[i]
    arr[i] = arr[i+1]
    // arr[i+1] = temp
  }

  arr[arr.length-1] = last
  // console.log(last);
  return console.log(arr);
  
  
}
const result3 = [40, 9, 38, 38, 39, 9, 74];
rightShift(result3);
