/* Essa sequência de const servem pra pegar as classes e colocar nessa variáveis */
const clock = document.querySelector('.clock');
const initTimer = document.querySelector('.inittimer');
const stopTimer = document.querySelector('.stop');
const reset = document.querySelector('.reset');

/* aqui temos a criação dos segundos, minutos e horas e também tem a variável "interval" criada, ela foi feita usando var, pois só atribuímos um valor pra ela lá em baixo e usando "let" ou "const" é possível */
let sec = 00
let min = 00
let hour = 00
var interval

/* função simples que coloca uma string '0' à esquerda de num número menor que 10 */
function zeroLeft(num){
    if(num<10){
        return ('0'+num)
    }else{
        return (num)
    }
}
/*Função de pausar */
function pause (){
    clearInterval(interval)
}
/* aqui é uma função que faz o contador começar a contar */
function start(){
    watch()
   interval = setInterval(watch,1000)
}
/* Função que serve para colocar as horas daqui lá no site, também tem todo o esquema de transformar 60 seg em 1 min... */
function watch(){
    sec++
    if(min == 60){
        hour++
        min = 0
    }
    if(sec == 60){
        min++
        sec = 0
    }
    clock.innerHTML=zeroLeft(hour)+':'+zeroLeft(min)+':'+zeroLeft(sec)

}
/* Função que vai zerar os valores de segundos, minutos e horas e retornar o html para 00:00:00 */
function resetTimer (){
    clearInterval(interval)
    sec = 0
    min = 0
    hour = 0
    clock.innerHTML = '00:00:00'
}

/* Aqui abaixo são os códigos responsáveis pelo click do usuário, quando ele clicar em iniciar o código vai captar o evento de click e executar a função "start() e assim por diante" */
initTimer.addEventListener('click', function(event){
    start()
    clock.style.color = '#fff'
   
})
/* esse if serve para as horas não irem para cor vermelha caso o usuário clique em pausar com o timer zerado */
stopTimer.addEventListener('click', function(event){
    pause()
    if(sec === 0 && min === 0 && hour === 0){
        return clock.style.color = '#fff'
    }
    clock.style.color = '#FF0000'
})

reset.addEventListener('click', function(event){
    resetTimer()
    clock.style.color = '#fff'
})
