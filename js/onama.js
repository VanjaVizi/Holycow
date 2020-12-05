

/*
function countdown(){
  var danas= new Date();
  var datumOtvaranja = new Date(2021,2,25);

  var trenutnoVreme = danas.getTime();
  var vremeOtvaranja = datumOtvaranja.getTime();

  var preostaloVreme = vremeOtvaranja-trenutnoVreme;
  var sekunde= Math.floor(preostaloVreme/1000);
  var minuti = Math.floor(sekunde/60);
  var sati= Math.floor(minuti/60);
  var dani = Math.floor(sati/24);

 

  dani%=24;
  sati%=60;
  minuti%=60;
  sekunde%=60;
  if(sati<10){
    sati="0"+sati;
  }
  if(minuti<10){
    minuti="0"+minuti;
  }
  if(sekunde<10){
    sekunde="0"+sekunde;
  }
  console.log(dani, sati,sekunde,minuti)

  document.getElementById("dani").innerHTML=dani;
  document.getElementById("dani").innerText=dani;
  document.getElementById("minuti").textContent=minuti;
  document.getElementById("sati").textContent=sati;
  document.getElementById("sekunde").textContent=sekunde;
  //Poziva funckiju nakon 1000ms =1s
  setTimeout(countdown,1000); 

}

countdown();

*/



