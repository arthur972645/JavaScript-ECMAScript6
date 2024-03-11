const pessoa = {
    saudacao:'Olá, seus monstros!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()

//função bind
const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()

function Pessoa(){
    this.idade = 0
    setInterval(function(){
       console.log(this.idade++)
    }.bind(this),1000)
}
new Pessoa

function pessoa2(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    })
}
new pessoa2