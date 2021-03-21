window.onload = function() {
	let startPos;

	let geoOptions = {
		timeout: 10 * 1000,
		enableHighAccuracy: true
	};

	let geoSuccess = function(position) {
		startPos = position;
		document.getElementById('lat').innerHTML = startPos.coords.latitude;
		document.getElementById('lon').innerHTML = startPos.coords.longitude;
		document.getElementById('acc').innerHTML = startPos.coords.accuracy;
	};

	let geoError = function(error) {
		alert('Error occurred. Error code: ' + error.code);
		// error.code can be:
		//   0: unknown error
		//   1: permission denied
		//   2: position unavailable (error response from location provider)
		//   3: timed out
	};

	navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};

document.addEventListener("DOMContentLoaded", function() {

});