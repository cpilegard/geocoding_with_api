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

	function get_user_locations() {
		$.ajax({
			url: '/user_locations',
			type: 'post'
		}).done(function(result) {
			for (i = 0; i < result.length; i++) {
				var latLng = new google.maps.LatLng(result[i].lat, result[i].lng);
				var marker = new google.maps.Marker({
		      position: latLng,
		      map: map
		  	});
			}
		});
	}

  initialize();
  get_user_locations();

  $('#submit_address').on('click', function(e) {
  	e.preventDefault();
  	var address = $('#address').val();
  	
  	geocoder.geocode({'address': address}, function(results, status) {
  		if (status == google.maps.GeocoderStatus.OK) {
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