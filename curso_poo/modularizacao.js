//var ingredientes = ['tomate','cebola']

function maiusculo(vetor) {
    var lista = []
    for (var a=0;a != vetor.length;a++) {
        var vetor2 = vetor[a].nome
        var letras = vetor2.split('')
        var vetorfinal = letras[0].toUpperCase() + vetor2.slice(1)
        lista.push(vetorfinal)
        vetor2 = vetorfinal = letras = ''
    }
    return lista
}

function maiusculo2(vetor,atributo) {
    if (typeof vetor[0] == 'object') {
        var modificado = vetor.map((obj) => {
            var letras = obj[atributo].split('')
            obj[atributo] = letras[0].toUpperCase() + obj[atributo].slice(1)
            //console.log(obj)
            return obj
        })
        return modificado
    }
    else {
        var modificado = vetor.map((obj) => {
            var letras = obj.split('')
            obj = letras[0].toUpperCase() + obj.slice(1)
            return obj 
        })
        return modificado
    }
}
//console.log(ingredientes)
//console.log(maiusculo(ingredientes))

export {maiusculo,maiusculo2}
//nao to conseguindo exportar os ingredientes