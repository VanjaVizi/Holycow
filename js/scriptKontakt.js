
function funkcija1() {
  let imePrezime;
  let email;
  let utisak;
  //pokupi imeprezime, mejl i utisak iz forme preko id-ija
  imePrezime = document.getElementById("imeiprezime").value;
  email=document.getElementById("email").value;
  utisak = document.getElementById("textBox").value;
  //ako je imePrezime prazan string ili ako nema znak razmaka 
    //Ako je prazan string znači da nista nije uneto
    //ako nema znak razmaka znaci da fali ili ime ili prezime
  if (imePrezime === "" || !imePrezime.includes(" ")) {
    alert("Pogrešan unos! Unesi ime i prezime");
    return false;
  }
  if(email==="" || !email.includes('@')){
    alert("Pogrešan unos! Unesi ispravan email!");
    return false;

  }
  //utisak ne sme da bude prazan string ili da bude duzi od npr 250 karaktera (ovo mozemo i da obrisemo)
  if(utisak==="" || utisak.length()>250){
    alert("Pogrešan unos! Unesi neki utisak kraći od 250 karaktera!");
    return false;
  } 

}








function funkcija2() {
  let imePrezime;
  var brojOsoba;
  let datum; //ovo ce biti string datum rezervacije
  let datumRezervacije;
  let danas = new Date(); //danasnji datum
  //pokupi sve podatke iz forme preko id-ija
  imePrezime = document.getElementById("imeiprezime2").value;
  brojOsoba = document.getElementById("broj").value;
  datum = document.getElementById("datum").value;  //vraca datum u obliku 2020-11-30
 //uzecemo taj datum i podelicemo ga u niz stringova uz pomoc funckije split
  let elementiDatuma=datum.split("-"); //ovo ce viti niz stringova u ovom obliku "2020","11","30"
  //ova promenljiva ce biti tipa Date i u nju cemo smestiti podatke iz niza od gore
  //ali pre toga moramo da ih pretvorimo i int jer su oni string ("2020"..)
  //datum se setuje redosledom godina, mesec, dan
  //meseci se broje od nule, pa se oduzima 1 
  datumRezervacije = new Date(parseInt(elementiDatuma[0]),parseInt(elementiDatuma[1]-1),parseInt(elementiDatuma[2]));

  let brojSekundiDoDanaRezervacije = datumRezervacije.getTime(); //vreme u milisekundama
  let preostaloVreme =brojSekundiDoDanaRezervacije- danas.getTime(); 
  //alert(preostaloVreme);
  if (imePrezime === "" || !imePrezime.includes(" ")) {
    alert("Pogrešan unos! Unesi puno ime i prezime");
    return false;
  }
  if (isNaN(brojOsoba) || brojOsoba < 1 || brojOsoba>50) {
      alert("Pogrešan broj osoba!")
      return false;
  } 
  if(preostaloVreme<0){
    alert("Odaberite neki datum iz budućnosti!")
    return false;
  }
  
}

