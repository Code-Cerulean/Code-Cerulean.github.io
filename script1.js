        
  
    
        //updates clock every second
        setInterval(showTime, 1000);
        
        //funct. to create clock
        function showTime() {
            let time = new Date();
            let hours = time.getHours();
            let mins = time.getMinutes();
            let secs = time.getSeconds();
            am_pm = "AM";
            
            //Convert clock to 12 hr format
            if (hours > 12) {
                hours -= 12;
                am_pm = "PM";
            }
            if (hours == 0) {
                hours = 12;
                am_pm = "AM";
            }
            
            //update time and seconds if less than 10
            hours = hours< 10 ? "0" + hours : hours;
            mins = mins < 10 ? "0" + mins : mins;
            secs = secs < 10 ? "0" + secs : secs;
         
            //updates current date
            var currentDate  = new Date(),
            currentDay   = currentDate.getDate() < 10 
                 ? '0' + currentDate.getDate() 
                 : currentDate.getDate(),
            currentMonth = currentDate.getMonth() < 9 
                 ? '0' + (currentDate.getMonth() + 1) 
                 : (currentDate.getMonth() + 1);
         
            //date formatting
            let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
             
            //displays date
            document.getElementById("date").innerHTML = months[currentMonth - 1] + " " + currentDay + ", " + currentDate.getFullYear();
          
            //display current time and date
            let currentTime = hours + ":"
                + mins + ":" + secs + " " + am_pm;
            document.getElementById("clock")
                .innerHTML = currentTime;
        }
 
        showTime();
 

        
     
