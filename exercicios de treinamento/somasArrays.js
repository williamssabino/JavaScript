let a = 20
let b = 5
let arrayNum=[]


if(a<b){
    arrayNum.push(a)
    arrayNum.push(b)
}
else{
    arrayNum.push(b)
    arrayNum.push(a)
}

let func = (x)=>{
    let soma = 0
    
    for(let c=x[0];c<=x[1];c++){
        soma+=c
    }
    console.log(soma)
}
func(arrayNum)