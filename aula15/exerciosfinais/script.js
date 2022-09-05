var list = [] //vetor global
let num =  window.document.getElementById('txtnum')//
let set = window.document.getElementById('set')//

function adic(){
    let n1 = Number(num.value)//transforma o valor de texto em tipo number 

    if(num.value.length == 0 ){//testa se a caixa de texto esta vazia
        window.alert('Adicione valores ')
    }
    else if(n1<0 || n1>100){
        window.alert('Digite um valor de 0 a 100')

    }
    else{
        
        if(list.indexOf(n1) == -1 ){//testa se o n1 esta dentro da lista
            list.push(n1) // caso o n1 n esteja dentro da lista,o adciona dentro dentro dela
            let add = window.document.createElement('option')//cria um elemento option
            add.text = `O valor ${n1} foi adcionado`//adiciona em formato de texto dentro do option
            set.appendChild(add)//adciona o valor dentro de select 
            
        }   
        else{
            window.alert('[ERRO] esse valor ja foi adicionado!')//caso ja tenha o valor retona um erro
        
        }
    }
    num.value='' //limpa a caixa de texto do input 
    num.focus() 
}


function finalizar(){
    n1 = Number(num.value)
    let res = window.document.getElementById('res')
    let maior = 0
    let menor = 0
    let s = 0
    let media = 0
    
    if(list.length == 0){//testa se a lista esta vazia
        alert('Adicione valores antes de finalizar')
    }
    else{ 
        
        //maior e  menor
        for(let c=0;c<list.length;c++){
            s+=list[c]// soma cada valor na lista em determinada posição
            media = s/list.length// tira a media valores dentro da lista
            
            if (c==0){
                maior = list[c]
                menor = list[c]
            }
            else{
                if(list[c] > maior){
                    maior = list[c]
                }
                else if(list[c] < menor){
                    menor = list[c]
                }
            }
           
        }
        res.innerHTML = `Ao todo foram ${list.length} valores <p> O maior numero é ${maior} <p> O menor numero é ${menor} <p> Soma de todos os valores vale ${s} <p> A media dos valores digitados é ${media}`
       
    }

}