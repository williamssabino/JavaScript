function contar(){
    var inicio =  window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var dres = window.document.getElementById('res')
    
   
    if(passo.value.length == 0 || fim.value.length == 0 || inicio.value.length == 0 ){
        window.alert('[ERRO] prencha todos os campos')
    }
    else{
        dres.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value) 
        
        if(p==0){
            window.alert('O passo não pode ser zero! sera atribuido o valor 1')
            p=1
        }
        if(c<f){
            for(var c = i;c <= f;c += p){
            
                dres.innerHTML += `${c}&#x1F449`
            }
            dres.innerHTML += '&#x1F3F4'
        }
        else{
            for(var c = i;c >= f;c -= p){
            
                dres.innerHTML += `${c}&#x1F449`
            }
            dres.innerHTML += '&#x1F3F4'
        }
    }
    
    
}