function initMap() {
    var uluru = {lat: 41.538, lng: -88.171};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  