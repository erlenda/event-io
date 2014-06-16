'use strict';

angular.module('ev')
  .factory('statics', ['$window', function ($window) {
      // Private
      var _ = $window._;
      var cities = [
        { id: 0, name: 'Bergen', lat: 60.3900, lng: 5.3200, zoom: 14, promote: true},
        { id: 1, name: 'Oslo', lat: 59.9100, lng: 10.7500, zoom: 13, promote: true},
        { id: 2, name: 'Trondheim', lat: 63.4297, lng: 10.3933, zoom: 13, promote: false},
        { id: 3, name: 'Stavanger', lat: 58.9633, lng: 5.7188, zoom: 13, promote: false}
      ];

      var locations = [
        {cid: 0, lat: 60.3900, lng: 5.3200, label: 'Bergen Sentrum Scene'},
        {cid: 0, lat: 60.393707, lng: 5.326618, label: 'Suitellet'},
        {cid: 1, lat: 59.9100, lng: 10.7500, label: 'Oslo Sentrum Scene'}
      ];

      var bubbles = [
        {cid: 0, template: 'template'}
      ];

    // Public
    return {
      getCities: function () {
        return cities;
      },
      getLocations: function () {
        return locations;
      },
      getLocationsByCid : function (cid) {
        var arr = [];
        _.each(locations, function(item) {
          if(item.cid === cid) {
            arr.push(item);
          }
        });
        return arr;
      }
    };
  }]);
