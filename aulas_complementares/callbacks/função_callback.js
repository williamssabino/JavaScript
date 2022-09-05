// Funçaom de callback são funçoes que sao passadas como argumentos para receber valores e ser acionada apos o valor ser recebido 


//exemplo de callback funçoes normais

function exibir(num){
    console.log(num)
} 

function somar(a,b ,callback){
    op = a+b
    callback(op) 
}

somar(2,4,exibir)

//exemplo de calbacks co arrow functions

let myFunction = (x , y, callback) =>{
    ope = x*y
    callback(ope)
}

myFunction(5 ,6 ,exibir => {
    console.log(exibir)
})