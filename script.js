var millisecond=document.querySelector("#millisecond");
var minutes=document.querySelector("#minutes");
var seconds=document.querySelector("#seconds");
var start=document.querySelector("#start");
var stop=document.querySelector("#stop");
var reset=document.querySelector("#reset");
var milsec='0';
var min='0';
var sec='0';
millisecond.innerHTML='00';
minutes.innerHTML='00';
seconds.innerHTML='00';
start.addEventListener("click",()=>{
    timer=true;
    stopwatch();
})
stop.addEventListener("click",()=>{
    timer=false;
})
reset.addEventListener("click",()=>{
    timer=true;
    min = 0;
    sec = 0;
    milsec = 0;
    millisecond.innerHTML='00';
minutes.innerHTML='00';
seconds.innerHTML='00';
})
function stopwatch(){
    if (timer) {
        milsec++;
 
        if (milsec == 100) {
            sec++;
            milsec = 0;
        }
 
        if (sec == 60) {
            min++;
            sec= 0;
        }   
        // if(min==60){
        //     min++;
        //     sec=0;
        //     milsec=0;
        // }
        
        let minString = min;
        let secString = sec;
        let millistring = milsec;
 
        
        if (min < 10) {
            minString = "0" + minString;
        }
 
        if (sec < 10) {
            secString = "0" + secString;
        }
 
        if (milsec < 10) {
            millistring = "0" + millistring;
        }
        millisecond.innerHTML=millistring;
        minutes.innerHTML=minString;
        seconds.innerHTML=secString
       
        setTimeout(stopwatch, 10);
    }
}

