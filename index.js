let sec = 0
let min = 0
let hrs = 0
let interval = 0

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    interval = setInterval(timer,10) 
}

function stop(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    sec = 0
    min = 0
    hrs = 0
    document.getElementById('timer').innerHTML = '00:00:00'
}

function timer(){
    document.getElementById('timer').innerHTML = `${twoDigits(hrs)}:${twoDigits(min)}:${twoDigits(sec)}`
    sec += 1
    if (sec == 60){
        min += 1
        sec=0    
    } if (min == 60){
        min = 0
        hrs += 1
    }
}
    