const clock = document.querySelector('.clock');
const initTimer = document.querySelector('.inittimer');
const stopTimer = document.querySelector('.stop');
const reset = document.querySelector('.reset');


let sec = 00
let min = 00
let hour = 00
var interval

function zeroLeft(num){
    if(num<10){
        return ('0'+num)
    }else{
        return (num)
    }
}

function pause (){
    clearInterval(interval)
}

function start(){
    watch()
   interval = setInterval(watch,1000)
}
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
function resetTimer (){
    clearInterval(interval)
    sec = 0
    min = 0
    hour = 0
    clock.innerHTML = '00:00:00'
}


initTimer.addEventListener('click', function(event){
    start()
    clock.style.color = '#fff'
   
})

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
