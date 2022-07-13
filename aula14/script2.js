function calcular(){
    var n = window.document.getElementById('num')// adc dentro de uma variavel uma tag para manipularmos atraves do id 
    var sel = window.document.getElementById('set')
    var n1 = Number(n.value)

    if(n.value.length == 0){// testa se o input esta vazio
        window.alert('[Erro] Digite um valor')// msg de alerta caso esteja vazio o campo do input

    }
    else{
        sel.innerHTML='' //limpa o select
        for(c=0;c<=10;c++){ 
            var add = document.createElement('option')//crea um elemento option dentro de select
            add.text = `${n1}X${c}=${c*n1}`//cria um formato texto para adcionar
            sel.appendChild(add)// adiciona dentro um option dentro de selct

            add.value = `sel${c}`// faz cada item dentro de select ter um valor 
        }

    }
}