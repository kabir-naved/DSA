// console.log(8);

function printt(n) {
  if(n == 0 | n == 1) return n;

  return printt(n - 1) + printt(n - 2);
}

console.log(printt(15));