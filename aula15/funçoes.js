//recursividade
function fatorial(n){
    if(n==1){
        return 1
    }
    else{
        return n* fatorial(n-1)
    }
}

let v = fatorial(5)
console.log(v)