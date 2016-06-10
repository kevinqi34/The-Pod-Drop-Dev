
// Create Maps


function initMaps() {

  var latlng = $('#latlng').val();
      latlng = latlng.split(',');
  var title = $('#store_title').val();
  var address = $('#store_address').val();




  var myOptions = {zoom:9,center:new google.maps.LatLng(latlng[0], latlng[1]),
      mapTypeId:
        google.maps.MapTypeId.ROADMAP};
        map = new google.maps.Map(document.getElementById('map'),myOptions);
        marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(latlng[0], latlng[1])});
        infowindow = new google.maps.InfoWindow({content:'<strong>' + title + '</strong><br>' + address + '<br>'
       });


      google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
      infowindow.open(map,marker);


}


// Create Sliders

function initSlider() {

  $('div.img').slick({
     dots: true,




  });





}
