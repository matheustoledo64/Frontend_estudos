let cronometro = document.querySelector('#tempo')
var segundos = 0
var minutos = 0
var horas = 0
var contclicks = 0
var contclicksparar=0
var contclicksescuro =0
document.querySelector('#iniciar').addEventListener('click', a=>{
    //BOTÃO DE INICIAR
    contclicks++
    contclicksparar =0
    document.querySelector('.txtcaixa').innerText = 'Iniciar'
    if (contclicks == 1) {
    var contagemseg = setInterval(d=>{
        segundos++
        cronometro.innerHTML = `0${horas}:0${minutos}:0${segundos}`
        if (segundos == 60) {
            segundos = 0
            minutos++
            cronometro.innerHTML = `0${horas}:0${minutos}:0${segundos}`
        }
        if (minutos == 60) {
            minutos = 0
            horas++
            cronometro.innerHTML = `0${horas}:0${minutos}:0${segundos}`
        }
        if (minutos >= 10) {
            cronometro.innerHTML = `0${horas}:${minutos}:0${segundos}`
        }
        if (horas >= 10) {
            cronometro.innerHTML = `${horas}:0${minutos}:0${segundos}`
        }
        if (segundos >= 10) {
            cronometro.innerHTML = `0${horas}:0${minutos}:${segundos}`
        }
    },1000)
}
    document.querySelector('#parar').addEventListener("click",c=>{
        //BOTÃO DE PARAR
        clearInterval(contagemseg)
        contclicks = 0
        contclicksparar++
        document.querySelector('.txtcaixa').innerHTML = 'Retomar'
    })
    document.querySelector('#reiniciar').addEventListener("click", b=>{
        //BOTÃO DE REINICIAR
        clearInterval(contagemseg)
        segundos = minutos = horas = 0
        cronometro.innerHTML = `0${horas}:0${minutos}:0${segundos}`
        contclicks = 0
        document.querySelector('.txtcaixa').innerHTML = 'Iniciar'
    })
})
document.querySelector('#escuro').addEventListener('click', e=>{
    contclicksescuro++
    var main = document.querySelector('main')
    if(contclicksescuro%2 != 0) {
        document.querySelector('#escuro').innerHTML = '🌙'
        document.querySelector('#escuro').style.backgroundColor = 'rgb(58, 58, 58)'
        main.style.backgroundColor= 'rgba(255, 255, 255, 0.918)';
        main.style.color = 'black'
    }
    else {
        document.querySelector('#escuro').innerHTML = '☀️'
        document.querySelector('#escuro').style.backgroundColor = 'white'
        main.style.backgroundColor = "#2b2a2ae0"
        document.querySelector('main').style.color = "white"
    }
})