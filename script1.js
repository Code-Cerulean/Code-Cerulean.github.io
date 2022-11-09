 <script>
        //SelectMenu Customization
        const selectMenu = document.querySelectorAll("select");
        
        for(let i  = 12; i > 0; i--){
           i = i < 10 ? "0" + i : i;
           let option = '<option value = "${i}">${i}</option>';
           selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);    
        }
        
        
        for(let i  = 59; i >= 0; i--){
           i = i < 10 ? "0" + i : i;
           let option = '<option value = "${i}">${i}</option>';
           selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);    
        }
        
        
        for(let i  = 2; i > 0; i--){
           let ampm = i == 1 ? "AM" : "PM";
           let option = '<option value = "${ampm}">${ampm}</option>';
           selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);    
        }
        
        setAlarmBtn = document.querySelctor("button");
        
        function setAlarm(){
            let time = '${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}
        
        }
        setAlarmBtn.addEventListener("click", setAlarm);
        
     
    </script>
