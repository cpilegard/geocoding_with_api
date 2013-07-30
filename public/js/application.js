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
  			console.log('lat: '+results[0].geometry.location.lat());
        console.log('lon: '+results[0].geometry.location.lng());

        $.ajax({
        	url: '/location',
        	type: 'post',
        	data: {	lat: results[0].geometry.location.lat(),
        					lng: results[0].geometry.location.lng()}
        });

  			var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      	});
  		} else {
      	alert('Error: ' + status);
      }
  	});
  });
});
