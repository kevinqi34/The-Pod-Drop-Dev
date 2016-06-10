


function create_collage() {


  $(window).on('resize load', function() {

    var width = $( window ).width();

    if (width >= 500) {

    $('div.collage').removeWhitespace().collagePlus({
        targetHeight: 300

    });

  }else {
      $('div.collage').removeWhitespace().collagePlus({
        targetHeight: 140

    });





  }
  }).resize();

}


function writeText() {
  $("#typed").typed({
             stringsElement: $('#typed-strings'),
             typeSpeed: 100,
             loop: true,
             backSpeed: 50,
             backDelay: 500,
             showCursor: false
         });


}






function image_scroll() {


  var count = 0;

  $('div.cred_wrapper').find('img').each(function() {
    count++;

  });

  $('div.cred_wrapper').css("width",(count * 300));

  var width = count * 300;
  var timer = count * 3000;


  var scroll = function() {
    var window_width = $( window ).width();
    var position = $('div.cred').scrollLeft();


    $('div.cred').animate({
    scrollLeft: width - window_width
    }, timer, function() {

          $('div.cred').animate({
              scrollLeft: 0
          }, timer);

    });


    };
    window.setInterval(scroll, (timer * 2));
    scroll();





}









//init all the functions


$( document ).ready(function() {
    // collage
    create_collage();

    writeText();

    image_scroll();


    // Create Map
    initMaps();

    // Create Sliders

    initSlider();

});
