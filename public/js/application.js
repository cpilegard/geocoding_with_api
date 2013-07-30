$(document).ready(function() {
  var geocoder;
  var map;
  function initialize() {
  	geocoder = new google.maps.Geocoder();
  	var latlng = new google.maps.LatLng(36.7959, -119.813894);
  	var mapOptions = {
	    zoom: 12,
	    center: latlng,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }

  initialize();
});
