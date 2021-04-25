$(document).ready(function () {
  var cardsOpen = 0;
  var first = '';
  counter = 1;
  solved = 0
  for (i = 1; i <= 6; i++) {
    $("#main").append('<div class="row" id="row' + i + '"><div>');
    for (j = 1; j <= 6; j++) {
      $("#row" + i).append(
        '  <div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"></div><div class="flip-card-back"><img class="tile_' +
          counter +
          '" src="images/' +
          counter +
          '.jpg"></div></div></div>'
      );
      counter++;
      if (counter == 19) {
        counter = 1;
      }
    }
  }

  $(".flip-card").click(function () {
    if (cardsOpen == 0) {
        bla=    $(this).find(".flip-card-inner").css("transform", "rotateY(180deg)");
      $(this).find(".flip-card-inner").css("transform", "rotateY(180deg)");
      first = $(this).find("img").attr("class")
      console.log(first)
      cardsOpen = 1;
    } else if (cardsOpen == 1) {
      $(this).find(".flip-card-inner").css("transform", "rotateY(180deg)");
      if(first == $(this).find("img").attr("class")){
        $(this).find(".flip-card-inner").addClass("solved");
        $(bla).addClass("solved");
        $(this).find(".flip-card-inner").removeClass("flip-card-inner");
        $(bla).removeClass("flip-card-inner");
        solved++;
      }else{
        window.setTimeout( show_popup, 500 ); 
      }
      if(solved == 17){
        window.alert("Congratulations!");
      }
      cardsOpen = 0;
    }
  });
});



function show_popup(){
$(".flip-card-inner").css("transform", "unset")
 };