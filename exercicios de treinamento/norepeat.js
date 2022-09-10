let array1=[1,2,3,10,7,9,8,0,]
let array2=[1,2,3,5,9,6,7]

let comparar = (x,y)=>{
    let newArray=[]
    
    for(let c in x){
        if(y.indexOf(x[c]) == -1){
            newArray.push(x[c])
        }
    }

    for(let z in y){
        if(x.indexOf(y[z]) == -1){
            newArray.push(y[z])
        }
    }

    console.log(newArray)
}
comparar(array1,array2)
