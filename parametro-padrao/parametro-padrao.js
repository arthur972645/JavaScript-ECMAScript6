//um funcção que recebe 3 parametros e se não aribuir 3 parametros retorna o nam 
// function teste (x,y,z){
//     return x + y + z
// }
// console.log(teste(),teste(1),teste(1,2,3))

//FORMAS DE TRABALHAR COM OS ERROS EM UM PARAMETRO
// atribuir um valor caso o parametro não tenha um valor:


// forma1 : 
function soma (x,y,z){
//     //Essa parte do codigo é para se o parametro não receber um valor atribuir a esse parametro o valor de 1
    x = x || 1
    y = y || 1
    z = z || 1
    return x + y + z
}
console.log(soma(),soma(2),soma(1,2,3),soma(0,0,0))

// FORAM2 :  
function soma2(x,y,z){
    if(x == undefined){
        x = 1
    }
    if(y == undefined){
        y = 1
    }
    if(z == undefined){
        z = 1
    }
    return x + y + z
}
console.log(soma2(),soma2(2),soma2(1,2,3),soma2(0,0,0))

//FORMA 3:
function soma3(x,y,z){
    x = x !== undefined ? x : 1 //operador ternario, isso é o meso que um if so que menor, onde se x for diferente de undefind x = x, se for igual x = 1
    y = 1 in arguments ? y : 1
    z = isNaN(z)? 1 : z
    return x + y + z
}
console.log(soma3(), soma3(2), soma3(1,2,3), soma3(0,0,0))

//FORMA4:
//ECMAScript 6 -> Vlor padrao com parametro 
function soma4(x = 1,y = 1,z = 1){
    return x + y + z;
}
console.log(soma4(), soma4(2), soma4(1,2,3), soma4(0,0,0))
