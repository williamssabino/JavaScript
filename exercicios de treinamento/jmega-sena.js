let n = 7
console.log(`Sorteando ${n} Jogos`)
    for(var c=1; c <= n;c++){
        let lista = []
        
        for(var cc=0; cc < 6;cc++){ 
            var n1 = Math.floor(Math.random()*(60 - 1 + 1)) + 1
           
            if(lista.indexOf(n1)==-1){
               
                lista.push(n1+' ')
            }   
        }
        
        console.log(`JOGO ${c}: [${lista}]`)
    }
    