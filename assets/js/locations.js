function initMap() {
    var uluru = {lat: 41.538, lng: -88.171};
    var uluru2 = {lat: 41.885, lng: -87.631};
    var uluru3 = {lat: 41.831, lng: -87.626};
    var uluru4 = {lat: 41.707, lng: -87.904};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru4});
    var marker = new google.maps.Marker({position: uluru, map: map, icon: 'assets/media/1.png'});
    var marker2 = new google.maps.Marker({position: uluru2, map: map, icon: 'assets/media/2.png'});
    var marker3 = new google.maps.Marker({position: uluru3, map: map, icon: 'assets/media/3.png'});
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);    
  }
  