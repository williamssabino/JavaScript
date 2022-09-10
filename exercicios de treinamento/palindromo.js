let frase = 'race car'.toLowerCase()

let palin = (x)=>{
    let palavra = x.split(' ')
    let palavra2 = x.split('').reverse().join('')
    
    if ( palavra2.split(' ').join('')===palavra.join('')){
        console.log('True')
    }
    else{
        console.log('False')
    }
   
}
palin(frase)