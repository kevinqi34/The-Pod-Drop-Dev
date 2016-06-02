

function dropdowns () {

  $('#dropdown, #dropdown-menu').hover(function()
  {
       $('#dropdown-menu').show();
  }, function()
  {
       $('#dropdown-menu').hide();
  });


  $('#mob_nav').click( function() {
    $('#pull-down').toggle();

  });

  $('#content_body, #footer').click( function () {

    $('#pull-down').hide();
  });


}


function scrollnav() {



  $(document).scroll(function() {

    var width = $( window ).width();

    if (width >= 1224) {

     var scroll = $(document).scrollTop();

     if (scroll >= 200) {
       $('nav.temp-nav').hide();
       $('header').css('position','fixed');

       if (document.getElementById('map') == null) {
         $('#content_body').css('margin-top','320px');

       } else {
       $('#map').css('margin-top','320px');
       }


     }else {
       $('nav.temp-nav').show();
       $('header').css('position','initial');
       $('#content_body, #map').css('margin-top','0px');


     }


   }

  })


  var width = $( window ).width();

  if (width < 1224) {
    $('nav.temp-nav').hide();
    $('header').css('position','initial');
    $('#content_body, #map').css('margin-top','0px');

  }



}
