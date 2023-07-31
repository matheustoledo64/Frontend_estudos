import {maiusculo} from './modularizacao.js'
import {maiusculo2} from './modularizacao.js'
import {ingredientes} from './listaingredientes.js'

console.log(maiusculo(ingredientes))
console.log(maiusculo2(ingredientes,'nome'))

var divhtml = document.getElementById('ingredientes')
for (let ingrediente of maiusculo2(ingredientes,'nome')) {
    divhtml.innerHTML +=`
    <div>
    <img src='${ingrediente.img}'>
    <p>${ingrediente.nome}</p>
    </div>
    `
}
// codewars isso

function spinWords(string){
    var palavras = string.split(' ')
    var palavra_invertida = ''
    var num_palavra =''
    for (var c=0;c!=palavras.length;c++) {
      var letras = palavras[c].split('')
      if (letras.length >= 5) {
        num_palavra = c
        letras.reverse()
        for (var co=0;co!=letras.length;co++) {
          palavra_invertida += letras[co]
        }
        palavras[num_palavra] = palavra_invertida
      }
      palavra_invertida = ''
    }
    var fim = ''
    for (var a=0;a!=palavras.length;a++){
      if (a==0) {
        fim += palavras[a]
      }
      else if(a>=1){
        fim+= ' ' + palavras[a]
      }
    }
    return fim
}
console.log(spinWords('Hey fellow warriors'))
var jsones =  await fetch("testejson.json")
var data = await jsones.json()
console.log(data)
//realmente nao entendo como esse fetch funciona, tentei 
//pesquisar a respeito mas nao entendi. como pode nos tutoriais o
//json só ser mostrado sendo copiado e colado no codigo js

