function myMap() {
var mapProp= {
    center:new google.maps.LatLng(37.629737,-122.492871),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("mapDisplay"),mapProp);
}
google.maps.event.addDomListener(window, "load", myMap);
