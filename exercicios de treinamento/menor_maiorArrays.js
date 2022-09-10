const listArray = [
    [4,5,1,3],//0
    [13,27,18,26],//1
    [32,35,37,39],//2
    [1000,1001,857,1,3000]//3
]


let funcao = (x)=>{
    let maior 
    let newArray=[]//array que vai receber os maiores valores
   
    for (let array in x){
        for(let valor in x[array]){
            if( valor == 0 ){
                maior = x[array][valor]
            }
            else{
                if(x[array][valor] > maior){
                    maior = x[array][valor]      
                } 
            }     
        }
        newArray.push(maior)
    }
    console.log(newArray)
}
funcao(listArray)