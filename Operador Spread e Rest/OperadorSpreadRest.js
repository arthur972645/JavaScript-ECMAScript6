//Operador Spread e Rest
//Spred:
//Ele serve para juntar, copiar 
//O spred sempte  utiliza os 3 pontos (...)
const arrayOriginal = [1,2,3,4]
//como se tivisse copiando todos os dados do arrayOriginal no arrayFake com os 3 pontos 
const arrayFake = [...arrayOriginal]
console.log(arrayFake)

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
//vai ta juntando o aray1 com o array2
const arrayJuntas = [...array1, ...array2]
console.log(arrayJuntas)

const objOriginal = {nome:'Carlos', idade:23}
//vai ta capiando o objeto
const objFake = {...objOriginal}
console.log(objFake)
//ta copiando e adcioanado uma nova parte no objOriginal
const novoObeto  = {...objOriginal, profissao: "Economia"}
console.log(novoObeto)

//Rest:
//Os 3 pontos transforma os numeros em um array
function soma(...numeros){
    return numeros.reduce((total, numero)=> total+numero,0)
}
console.log(soma(1,2,3,4,5))
console.log(soma(10,20,30,40,50))