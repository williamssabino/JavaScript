function verif(){
    var dt = new Date()
    var anoat = dt.getFullYear()
    var ano = window.document.getElementById('idade')
    var res = window.document.getElementById('res')
    var imgs = window.document.getElementById('photo')
    if (ano.value.length == 0 || Number(ano.value) > anoat){
        window.alert('[ERRO] tente dados validos')
    } 
    else{
        var sex = window.document.getElementsByName("redsex")
        var calc = anoat - Number(ano.value)
        var gen = ''
        if (sex[0].checked){
            gen= 'Homem'
           
            if(calc < 10){

                imgs.src = 'imagens/bb.jpg'
            }
           

        }
        else{
            gen = 'Mulher'

        }
        res.innerHTML = `Detectamos um(a) ${gen} de ${calc} anos`
    }
}