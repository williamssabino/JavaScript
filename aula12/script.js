function carregar(){
    var atual = new Date()
    var hr = atual.getHours()
    var bo = window.document.getElementById('bod')
    var dhr = window.document.getElementById('hora')
    var dim = window.document.getElementById('imag')
    dhr.innerHTML= `Agora são ${hr} horas`
    if (hr >= 0  && hr<12){
        dim.src = 'imagens/dia.jpg'
        
    }
    else if(hr<=18){
        dim.src = 'imagens/tarde.jpg'
        bo.style.background= 'brown'
    }
    else{
        dim.src = 'imagens/noite.jpg'
        bo.style.backgroundColor = "black"
    }
}
