function showtime(){
    
    var d =  new Date();
    var currentHour = d.getHours();
    var currentMin = d.getMinutes();
    var currentSec = d.getSeconds();
    let currentPeriod = "PM";
   
    //set the period
    if(currentHour>=12){
        // console.log(currentHour);
        currentPeriod = "PM";
        }
        else{
            // console.log(currentHour);
            currentPeriod = "AM";
        }
        
    //aet 12 hour clock
    // currentHour = currentHour > 12 ? currentHour % 12 : currentHour;
    // currentHour = currentHour > 12 ? currentHour - 12 : currentHour;        
    
    if(currentHour>12){
    currentHour = currentHour - 12;

    }
    else{
    currentHour = currentHour;
    }
    

    // add 0 to hours
    if(currentHour<10){
        currentHour = "0"+currentHour;
    }
    if(currentSec<10){
        currentSec = "0"+currentSec;
    }
    if(currentMin<10){
        currentMin = "0"+currentMin;
    }
    
console.log(currentPeriod);
    // currentHour = currentHour > 12 ? currentHour - 12 : currentHour; //work fine
    document.getElementById("hour").innerHTML = currentHour;
    document.getElementById("min").innerHTML = currentMin;
    document.getElementById("sec").innerHTML = currentSec;
    document.getElementById("ampm").innerHTML = currentPeriod;

   

}
function showDate(){
    var d =  new Date();
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var currentDay = d.getDay();
    var todayDay = days[currentDay];

    var currentMon = d.getMonth();
    var month = ["January" ,"February" ,"March", "April", "May","June","July","August","September","October","November","December"];
    var todayMonth = month[currentMon];

    var currentYear = d.getFullYear();
    var currentDate = d.getDate();

    document.getElementById("month").innerHTML = todayMonth;
    document.getElementById("day-no").innerHTML = currentDate;
    document.getElementById("year").innerHTML = currentYear;
    document.getElementById("day").innerHTML =  todayDay;
    
}

setInterval(showtime,100);
setInterval(showDate,100);