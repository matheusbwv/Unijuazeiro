const prompt = require("prompt-sync")();
const n1 = prompt("digite um número: ")
const n2 = prompt("digite um número: ")
const n3 = prompt("digite um número: ")

const media = ((parseInt(n1) + parseInt(n2) + parseInt(n3))/3)


if (media < 6 ){
    console.log("reprovado")
}else if (media > 6){
    console.log("aprovado")
}

