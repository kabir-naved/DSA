function flatten() {
const output = [];
function processing(arr){
for(let i=0; i<arr.length; i++){
const current = arr[i];
if(Array.isArray (current)){
processing(current);
}else{
output.push(current);
}
}
}
processing(this);
return output;
}

Array.prototype.flatten = flatten;

console.log([1, 2, [3, 4], [5, [6, 7]]].flatten()); // [1, 2, 3, 4, 5, 6, 7]
console.log([1, 2, [3, 4], [5, [6, 7]]].flatten().length); // 7