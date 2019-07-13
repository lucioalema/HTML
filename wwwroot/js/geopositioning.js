function createDrivingDirectionsMap(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(OnSuccess, OnError, {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 50
        });
    }
    else{
        document.getElementById("map").innerHTML = "No support for geolocation";
    }
}

function OnSuccess(position){
    showMap(position.coords.latitude, position.coords.longitude);
}

function OnError(){
    var mapDiv = document.getElementById("map");
    switch (error.code){
        case error.PERMISSION_DENIED:
            mapDiv.innerHTML = "User denied the request for Geolocation.";
            break;
    }
}

function showMap(lat, long){
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var route = {
        origin: new google.maps.LatLng(lat, long),
        destination: "UTN Buenos Aires",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(24.85345, -24.234154),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    directionsRenderer.setMap(map);
    directionsService.route(route, function(result, status){
        if (status === google.maps.DirectionsStatus.OK){
            directionsRenderer.setDirections(result);
        }
    });
}