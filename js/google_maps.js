function init_map() {
  var myOptions = {zoom:9,center:new google.maps.LatLng(42.4931088,-83.471354),
      mapTypeId:
        google.maps.MapTypeId.ROADMAP};
        map = new google.maps.Map(document.getElementById('map'),myOptions);
        marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(42.47952,-83.47135)});
        marker2 = new google.maps.Marker({map: map,position: new google.maps.LatLng(42.68142,-83.13333)});
        infowindow = new google.maps.InfoWindow({content:'<strong>The Pod Drop</strong><br>43043 Grand River Ave, Novi, MI 48375<br>' });
        infowindow2 = new google.maps.InfoWindow({content:'<strong>The Pod Drop Rochestor</strong><br>424 S Main St, Rochester, MI 48307<br>'
    });

      google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
      google.maps.event.addListener(marker2, 'click', function(){infowindow2.open(map,marker2);});
      infowindow.open(map,marker);
      infowindow2.open(map,marker2);

}

google.maps.event.addDomListener(window, 'load', init_map);
