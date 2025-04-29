// console.log(8);

// function printt(n) {
//   if(n == 0 | n == 1) return n;

//   return printt(n - 1) + printt(n - 2);
// }

// console.log(printt(15));


let getData = [];

for(let i =0;  i< 5; i++) {
  if(getData.length === 4 ) break
  getData[i] = Number(prompt("enter your number"))
}

console.log(getData);
