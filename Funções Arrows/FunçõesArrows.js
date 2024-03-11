//Arrow Funcrion:

//REPESENTAÇÃO DE UMA FUNCÇÃO NORMAL:
//isso é uma função anonima, ou seja, que não possui nome
//É uma variavel que recebe como valor um parametro
let clicleArea = function(r){
    let PI = Math.PI
    let area = PI * r * r
    return area.toFixed(2)
}
console.log(clicleArea(6))

//REPRESENTAÇÃO DE UMA FUNÇÃO ARROW:
//Na função arrow, usou as chaves tem que usar o return

let clicleArea2 = (r) => {
    let PI = Math.PI
    let area = PI * r * r
    return area.toFixed(2)
}
console.log(clicleArea(6)+5);

//REPRESENTAÇÃO DE UMA FUNÇÃO ARROW function de uma forma bem simples com pouca linha de codigo:
//O return aqui já ta implicito
let clicleArea3 = (r) => (Math.PI * r * r).toFixed(2)
console.log(clicleArea3(2)+5)
