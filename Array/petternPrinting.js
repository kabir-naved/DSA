 //print X  pattern
 const xPatttrn = () => {
    const n =5
    for(let j = 1; j<=n; j++) {

        for(let k =1; k<=n; k++){
            if(j==k || j+k === n+1){
            process.stdout.write("* ");
            }else {
            process.stdout.write(" ");
            }
        }

        
        console.log()
    }
 }

//  xPatttrn()

 
 //print  V pattern
 const vPatttrn = () => {
    const n = 5
    for(let j = 1; j<=n; j++) {

        for(let k =1; k<=2*n-1; k++){
            if(j==k || j+k === 2*n){
            process.stdout.write("* ");
            }else {
            process.stdout.write(" ");
            }
        }
        console.log()
    }
 }

 vPatttrn()

 