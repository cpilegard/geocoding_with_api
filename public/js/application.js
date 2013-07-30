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

  $('#submit_address').on('click', function(e) {
  	e.preventDefault();
  	var address = $('#address').val();
  	
  	geocoder.geocode({'address': address}, function(results, status) {
  		if (status == google.maps.GeocoderStatus.OK) {
  			console.log(results);
  			console.log(results[0].formatted_address);
  			console.log(results[0].geometry.location);
  			var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      	});
  		}
  	});
  });
});
