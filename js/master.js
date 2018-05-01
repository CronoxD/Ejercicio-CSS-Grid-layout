$(document).ready(function(){
  var band=0;
  $("#button").addClass('icon-menu');
  
  $("#button").click(function(){
    if(!band) {
      $("#button").animate({left: '300px'});
      $("#button").addClass('icon-close');
      $("#button").removeClass('icon-menu');
      $(".menu").animate({left: 0});
      band = !band;
    }
    else{
      $("#button").animate({left: '0px'});
      $("#button").removeClass('icon-close');
      $("#button").addClass('icon-menu');
      $(".menu").animate({left: '-300px'});
      band = !band;
    }
  });

});
