const display = document.getElementById("Display")
const startbtn = document.getElementById("startbtn")
const stopbtn = document.getElementById("stopbtn")
let timer = null
let stattime = 0
let elapsetime = 0
let isrunning = false

function starttimer() {
    if (!isrunning) {
        starttime = Date.now() - elapsetime
        timer = setInterval(updatetimer, 10)
        isrunning = true
        startbtn.disabled=true
         stopbtn.disabled=false
         startbtn.style.backgroundColor="grey"
         stopbtn.style.backgroundColor=" rgba(255, 4, 4, 0.623)"
       
    }

}
function updatetimer() {

    const current = Date.now();
    elapsetime = current - starttime


    let hours = Math.floor(elapsetime / (1000 * 60 * 60))
    let mints = Math.floor(elapsetime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsetime / 1000 % 60)
    let miliseconds = Math.floor((elapsetime % 1000) / 10)


    hours = String(hours).padStart(2,0)
    mints = String(mints).padStart(2,0)
    seconds = String(seconds).padStart(2,0)
     miliseconds = String(miliseconds).padStart(2,0)

    const timestring = `${hours}:${mints}:${seconds}:${miliseconds}`
    display.textContent=timestring

}

function stoptimer(){
    if(isrunning)
    {
        clearInterval(timer)
        elapsetime = Date.now() - starttime
        isrunning=false
        stopbtn.disabled=true
        startbtn.disabled=false
        startbtn.style.backgroundColor=" rgba(0, 128, 0, 0.623)"
        stopbtn.style.backgroundColor="grey"
        
    }
}
function resettimer(){
    clearInterval(timer)
  
 stattime = 0
 elapsetime = 0
 isrunning = false
 display.textContent="00:00:00:00"
  
  startbtn.disabled=false
  stopbtn.disabled=false
  startbtn.style.backgroundColor=" rgba(0, 128, 0, 0.623)"
 stopbtn.style.backgroundColor=" rgba(255, 4, 4, 0.623)"

}
