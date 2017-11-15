function initMap() {
    var location1 = {lat: 43.414693, lng: 23.228296};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 45,
      mapTypeId: 'satellite',
      center: location1
    });
    var marker1 = new google.maps.Marker({
      title: 'My hometown: MONTANA',
      position: location1,
      map: map
    });
}
