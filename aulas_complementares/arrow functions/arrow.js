//Arrow Functions
//sintaxes Possiveis

let primeira_forma=(a,b) => {// forma mias utilizada para quando queremos fazer maiores expressões
    return a+b
} 

let segunda_forma=(b,c) => b + c // quandmo queremos espressão rapidas

//Arrow com argumento

let frase = 'williams sabino da silva'

let fraseArray = (frase) => frase.split(' ')

console.log(fraseArray(frase))

//Arrow sem argumento

let semArg = () => console.log('não tenho argumento')

semArg()


//caso de uso
let roupas = [
    {produto: 'camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'calção', preco: 20, cor: 'Azul'}
    
]

let maior50 = roupas.filter((roupa) => roupa.preco >= 50
) 

console.log(maior50)

for(var c in roupas){
    console.log(`O produto ${roupas[c].produto} na cor ${roupas[c].cor} esta custando R$ ${roupas[c].preco}`)
} 