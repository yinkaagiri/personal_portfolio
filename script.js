function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(36, -100),
		zoom: 4,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions)

	var fortCampbell = new google.maps.Marker({
		position: {lat: 36.634, lng: -87.572},
    	map: map,
	});
	var fortBelvoir = new google.maps.Marker({
		position: {lat: 38.688, lng: -77.149},
   		map: map,
  	});
	var purdueUni = new google.maps.Marker({
		position: {lat: 40.424, lng: -86.7923},
   		map: map,
  	});
	var westPoint = new google.maps.Marker({
		position: {lat: 41.365, lng: -74.083},
    	map: map,
  	});
	var hinesvilleGa = new google.maps.Marker({
		position: {lat: 31.828, lng: -81.694},
   		map: map,
  	});
	var burkeVa = new google.maps.Marker({
		position: {lat: 38.779, lng: -77.347},
    	map: map,
  	});
	var fortStewart = new google.maps.Marker({
		position: {lat: 31.875, lng: -81.645},
   		map: map,
  	});
	var springfieldVa = new google.maps.Marker({
		position: {lat: 38.777, lng: -77.212},
    	map: map,
  	});
	var fortHood = new google.maps.Marker({
		position: {lat: 31.195, lng: -97.743},
    	map: map,
  	});
	var alleganyCol = new google.maps.Marker({
		position: {lat: 39.653, lng: -78.732},
    	map: map,
  	});
	var vincennesUni = new google.maps.Marker({
		position: {lat: 38.688, lng: -87.523},
    	map: map,
  	});
	var indianapolisIn = new google.maps.Marker({
		position: {lat: 39.780, lng: -86.413},
    	map: map,
  	});
	var bridgeportChi = new google.maps.Marker({
		position: {lat: 41.836, lng: -87.667},
    	map: map,
  	});
	var wickerChi = new google.maps.Marker({
		position: {lat: 41.909, lng: -87.686},
    	map: map,
  	});
	var lakeviewChi = new google.maps.Marker({
		position: {lat: 41.944, lng: -87.706},
    	map: map,
  	});
}

google.maps.event.addDomListener(window, 'load', initialize);
