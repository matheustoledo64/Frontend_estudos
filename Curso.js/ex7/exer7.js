let numeros = []
let res = document.getElementById('res')
function analise() {
    var n = ''
    n = Number(document.getElementById('num').value)
    if (numeros.indexOf(n) != -1 && n > 100) {
        window.alert('numero igual')
    }
    else {
    numeros.push(n)
    var opt = document.createElement('option')
    opt.innerText = `valor ${n} registrado`
    document.getElementById('sel').appendChild(opt)
    document.getElementById('num').focus()
    n.value = ''
    }
}
function fim() {
    res.innerHTML = ''
    res.innerHTML += `tem ${numeros.length} valores registrados`
    res.innerHTML += '<br>'
    let soma = 0
    for (let pos in numeros) {
        soma = soma + numeros[pos]
    }
    var media = soma/(numeros.length) 
    res.innerHTML += `a soma deles é ${soma}`
    res.innerHTML += '<br>'
    res.innerHTML += `maior: ${Math.max(...numeros)} menor: ${Math.min(...numeros)}`
    res.innerHTML += '<br>'
    res.innerHTML += `media = ${media}`
}