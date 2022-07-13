function contar(){
    let res = document.getElementById('res') 
    for(c=0;c<=10;c++){
        
        var n = (c%2==0)?`<mark> ${c}`: c
        res.innerHTML += `  ${n}`
        
    }
    
  
}