

var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!
      
          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd
          } 
          if(mm<10){
              mm='0'+mm
          } 
          var today = dd +'/'+ mm+'/'+ yyyy;
          document.getElementById('Show Date').innerHTML = today;
        //   document.write(today);

        var clock = setInterval(clock_frequency,1000)
         function clock_frequency(){
        var today = new Date();

        var hh = today.getHours();
        var mm = today.getMinutes();
        var ss = today.getSeconds();
       
        if(mm<10){
            mm='0'+mm
        } 
        if(hh>12)
        {
            hh = hh - 12
        }
        var today = hh + ':' + mm  + ':' + ss;
        document.getElementById('Show Clock').innerHTML = today;
         }