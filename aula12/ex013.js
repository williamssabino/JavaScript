var agr = new Date() //chama a função date
var diasm= agr.getDay()//pega o dia do sistema atual
switch(diasm){ // teste de espressão 
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábadso')
        break    

    default:
        console.log('dia invalido')
        break
}