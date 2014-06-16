angular.module('ev')
  .controller('MainCtrl', ['$scope', '$timeout', '$log', 'statics',
      function ($scope, $timeout, $log, statics) {
    $scope.coords = statics.getCities();
    $scope.markers = statics.getLocations();

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

    $scope.map = null;

    $scope.fetchMapElem = function () {
      loadMaps($scope.activeCoords.id);
      loadMarkers($scope.activeCoords.id);
    };

    $scope.fetchMapElem();

    $scope.coordsChanged = function (cid) {
      $scope.activeCoords = $scope.coords[cid];
      loadMaps(cid);
      loadMarkers(cid);
    };

    function loadMarkers (cid) {
      var tmpMarkers = statics.getLocationsByCid(cid);

        var timer = 100;
        var incr = 100;

      _.each(tmpMarkers, function (mark) {

        $timeout(function () {
          var myLatlng = new google.maps.LatLng(mark.lat, mark.lng);
          var marker = new google.maps.Marker({
            position: myLatlng,
            title: mark.label,
            animation: google.maps.Animation.DROP
          });

          google.maps.event.addListener(marker, 'click', toggleBounce);
          marker.setMap($scope.map);
          timer += incr;
        }, timer);
      });
    }

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(400);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    function loadMaps (id) {
      var mapOptions = {
        zoom: $scope.activeCoords.zoom,
        center: new google.maps.LatLng($scope.activeCoords.lat, $scope.activeCoords.lng),
        styles: [{featureType:'landscape',stylers:[{saturation:-100},{lightness:65},{visibility:'on'}]},{featureType:'poi',stylers:[{saturation:-100},{lightness:51},{visibility:'simplified'}]},{featureType:'road.highway',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'road.arterial',stylers:[{saturation:-100},{lightness:30},{visibility:'on'}]},{featureType:'road.local',stylers:[{saturation:-100},{lightness:40},{visibility:'on'}]},{featureType:'transit',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'administrative.province',stylers:[{visibility:'off'}]/**/},{featureType:'administrative.locality',stylers:[{visibility:'off'}]},{featureType:'administrative.neighborhood',stylers:[{visibility:'on'}]/**/},{featureType:'water',elementType:'labels',stylers:[{visibility:'on'},{lightness:-25},{saturation:-100}]},{featureType:'water',elementType:'geometry',stylers:[{hue:'#ffff00'},{lightness:-25},{saturation:-97}]}]
      };
      var mapElement = document.getElementById('map');
      $scope.map = new google.maps.Map(mapElement, mapOptions);
      return $scope.map;
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

