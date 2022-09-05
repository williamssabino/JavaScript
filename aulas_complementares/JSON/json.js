// criando json

let dados = {
    
    nome: 'Williams sabino',
    endereço:' Santa-cruz, Linhares-ES, 29908-0180',
    sexo: 'Masculino'
}


//É possível, também, que um atributo tenha como valor um outro objeto, criando, assim, uma hierarquia, como no exemplo a seguir:

let dados2 = {
    
    nome: 'Williams sabino',
    endereço:{
        bairro:' Santa-cruz, Linhares-ES', 
        cep:'29908-0180',
    },    
    sexo: 'Masculino',

}

//Uma outra possibilidade é  um atributo  ter, em seu valor, um conjunto de objetos e não apenas um. Isso implica na utilização de um array para reunir os objetos, conforme exemplo abaixo:

let dados3 = {
   
    nome: 'Williams sabino',
    endereço:{
        bairro:' Santa-cruz, Linhares-ES', 
        cep:'29908-0180',
    },    
    sexo: 'Masculino',

    telefones:[//criando uma lista para adionar mais objetos dentro de um atributo

        {
            contato: 'williams',
            numero: '2799759-7004'
        },

        {
            contato: 'mae',
            numero: '2799910-5566'
        }
    ]
}


//Para converrter uma JSON em string usamos JSON.stringify()

let jsonForstring = {nome: 'williams', idade: '22'}
let cvsao = JSON.stringify(jsonForstring)
console.log(cvsao)
console.log(typeof cvsao)


//Para converrter uma string em JSON usamos JSON.parse()

let stringforJson = '{"nome": "williams", "idade": "22"}'
let cvsao2 = JSON.parse(stringforJson)
console.log(cvsao2)
console.log(typeof cvsao2)

//tambem podemos definir funçoes dentro dos valores dos atributos

let dados4 = { //objeto com atributo recebendo uma função de valor
    nome: 'williams sabino',
    idade: '22',
    funcaoArrow: (x) => x**3 //atributo recebendo função como valor
    
}
 console.log(dados4.funcaoArrow(10))

 