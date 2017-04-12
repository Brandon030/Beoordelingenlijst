   function Click() {
       var antwoord = document.getElementById('veldje').value;
              
       if(antwoord < 50) {
           document.getElementById("resultaat").innerHTML = antwoord + " punten: Je hebt een onvoldoende.";
       }
       else if(antwoord <= 59) {
           
           document.getElementById("resultaat").innerHTML = antwoord + " punten: Je hebt een matig.";
       }
       
       else if(antwoord <= 74) {
           document.getElementById("resultaat").innerHTML = antwoord + " punten: Goed gedaan je hebt een voldoende.";
       }
       
       else {
           document.getElementById("resultaat").innerHTML = antwoord + " punten: Uitstekend je hebt een goed.";
       }
       
}     