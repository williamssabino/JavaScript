let list = [2,4,5,3,6,7,5,6]
var s=0

for(var c=0; c<list.length; c++){
    if (list[c]%2==0){
        s+=list[c]
    }
}
console.log(`O resultado da soma dos pares é ${s}`)

