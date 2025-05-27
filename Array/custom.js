// class  neww {
//     constructor(){
//         this.name = name
//         this.length = length
//     }


// }

function pushZerosToEnd(arr) {
    // code here
    for(let i =0; i < arr.length; i++) {
        if(arr[i] === 0 ){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    return console.log(arr);
    
}
pushZerosToEnd([1,2,0,4,3,0,5,0])