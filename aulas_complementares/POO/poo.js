class Pessoa{
   
    #nome 
    #idade
    #sexo

    constructor(nome, idade, sexo){
        this.#nome = nome
        this.#idade = idade
        this.#sexo = sexo
    }

    detalhes(){
        console.log(this.#nome)
        console.log(this.#sexo)
        console.log(this.#idade)
    
    }

    get nome(){
        return this.#nome
    }

    set nome(x){
        x = this.#nome
    }

    get idade(){
        return this.#idade
    }

    set idade(y){
        y= this.#idade
    }

    get sexo(){
        return this.#sexo
    }

    set sexo(z){
        z = this.#sexo
    }


}
let p1 = new Pessoa('williams', 22, "M")

p1.detalhes()
