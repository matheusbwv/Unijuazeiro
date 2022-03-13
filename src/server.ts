import { parse } from "path";

const prompt = require("prompt-sync")();
const n1 = prompt("digite um número: ")
const n2 = prompt("digite um número: ")
const n3 = prompt("digite um número: ")

const media = ((parseInt(n1) + parseInt(n2) + parseInt(n3))/3)


if (media < 6 ){
    console.log("sua media foi " + media.toFixed(2) + " : reprovado")
} else {
    console.log("sua media foi " + media.toFixed(2) + " : aprovado") 
} 

