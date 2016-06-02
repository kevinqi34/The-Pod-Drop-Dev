function arrow_nav() {



  $('#arrow').click(function() {


    var width = $( window ).width();

    if (width >= 1224) {


    var height = $('#pic-slider').height() + $('header').height() - 122;
    $('html body').animate({
        scrollTop: height
      }, 1000);



    }else {

      var height = $('#pic-slider').height() + $('header').height() + 2;
      $('html body').animate({
          scrollTop: height
        }, 1000);


    }


  });







}





//init all the functions


$( document ).ready(function() {
    // Nav
    arrow_nav();
});
