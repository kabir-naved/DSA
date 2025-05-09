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

const allSummer = (sums) => {
  let num = 0;
  for (let i = 0; i <= sums.length - 1; i++) {
    num = num + sums[i];
  }
  return num;
};

let add = [1, 2, 3];

console.log(allSummer(add));


let box = [2, 3, 4, 5, 9,20];
let target = 10;
let seen = {}; // an object to keep track of previously seen numbers

for (let i = 0; i < box.length; i++) {
  let current = box[i];
  let needed = target - current;

  if (seen[needed] !== undefined) {
    console.log("added", needed, "+", current);
    break;
  }

  seen[current] = i;
}

