$(document).ready(function () {
  $("#p1, #p2, #p3, #p4").hide();
});

//show me dugme prikriva i skida tekst
$(document).ready(function () {
  //kad se ucita stranica
  $("#btn1").click(function () {
    //kad kliknes na dugme sa klasom btn
    $("#p1").toggle(3000); //sakrij(otkri) tekst sa klasom togglepls u trajanju od 3000ms=3s
  });
});

$(document).ready(function () {
 
  $("#btn2").click(function () {
    
    $("#p2").toggle(3000); 
  });
});

$(document).ready(function () {
  
  $("#btn3").click(function () {
   
    $("#p3").toggle(3000);
  });
});

$(document).ready(function () {
  
  $("#btn4").click(function () {
    
    $("#p4").toggle(3000); 
  });
});
