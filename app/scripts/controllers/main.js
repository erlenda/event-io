angular.module('ev')
  .controller('MainCtrl', ['$scope', '$timeout', '$log',
      function ($scope, $timeout, $log) {
    $scope.coords = [
      { id: 0, name: 'Bergen', lat: 60.3900, lng: 5.3200, zoom: 14},
      { id: 1, name: 'Oslo', lat: 59.9100, lng: 10.7500, zoom: 13},
      { id: 2, name: 'Trondheim', lat: 63.4297, lng: 10.3933, zoom: 13}
    ];
    $scope.activeCoords = $scope.coords[0];
    $scope.activeDate = moment().format('YYYY.MM.DD');
    $scope.dateOptions = {
      format: 'yyyy.mm.dd',
      language: 'no',
      startDate: $scope.activeDate,
      /*endDate: "2012-10-31",*/
      autoclose: true,
      weekStart: 0
    };

    $scope.fetchMapElem = function () {
      loadMaps();
    };

    $scope.fetchMapElem();

    $scope.coordsChanged = function (id) {
      $scope.activeCoords = $scope.coords[id];
      loadMaps();
    };

    function loadMarkers () {
      var myLatlng = new google.maps.LatLng(60.3900, 5.3200);
      var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Bergen",
        animation: google.maps.Animation.DROP
      });

      google.maps.event.addListener(marker, 'click', toggleBounce);

      marker.setMap($scope.map);
    }

    function toggleBounce() {

      if (marker.getAnimation() != null) {
        marker.setAnimation(400);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    function loadMaps () {
      var mapOptions = {
        zoom: $scope.activeCoords.zoom,
        center: new google.maps.LatLng($scope.activeCoords.lat, $scope.activeCoords.lng),
        styles: [{featureType:'landscape',stylers:[{saturation:-100},{lightness:65},{visibility:'on'}]},{featureType:'poi',stylers:[{saturation:-100},{lightness:51},{visibility:'simplified'}]},{featureType:'road.highway',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'road.arterial',stylers:[{saturation:-100},{lightness:30},{visibility:'on'}]},{featureType:'road.local',stylers:[{saturation:-100},{lightness:40},{visibility:'on'}]},{featureType:'transit',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'administrative.province',stylers:[{visibility:'off'}]/**/},{featureType:'administrative.locality',stylers:[{visibility:'off'}]},{featureType:'administrative.neighborhood',stylers:[{visibility:'on'}]/**/},{featureType:'water',elementType:'labels',stylers:[{visibility:'on'},{lightness:-25},{saturation:-100}]},{featureType:'water',elementType:'geometry',stylers:[{hue:'#ffff00'},{lightness:-25},{saturation:-97}]}]
      };
      var mapElement = document.getElementById('map');
      $scope.map = new google.maps.Map(mapElement, mapOptions);
      loadMarkers();
    }
  }]);

angular.module('ev')
    .controller('AboutCtrl', function ($scope) {
      $scope.hi = {
        one: 'AboutCtrl says hi'
      };
    });

angular.module('ev')
    .controller('ContactCtrl', function ($scope) {
      $scope.hi = {
        one: 'ContactCtrl says hi'
      };
  });

