/*let num = [3,4,5,3]  //cria um vetor
num.push(8)// adc um valor dentro de um vetor 
num[5]=3 // adciona na posição 1 o valorc 3

num.length //length serve para ver o comprimento do vetor qunatas posoçoes ese vetor tem
num.sort()//sort serve para organizar os valores dentro da minha vsriavel
console.log(num)
*/

/*var maior, menor = 0 
var cont = 0
var n = 0 
while(cont != 5){
    if (cont==0){
        maior = n
        menor = n
        
    }
    else{
       if(n>maior){
        maior=n
       }
       else if (n<menor){
        menor = n 
       }
    }
    cont++

}
*/

let num =[3,5,6,7,8,8]

for (let pos in num){//para cada posição dentro de num
    console.log(`na posição ${pos} temos ${num[pos]}` )// mostra a posiçao e o valor dentro dela
    num.indexOf(7)// serve para buscar um valor dentro do vetor se n exixstir retorna -1
}
