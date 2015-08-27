/**
 * @author jacky810124
 * @description covert address to lat, lng
 */


//this project use rulencode, send-http-request
var sendRequest = require("send-http-request");
var urlencode = require('urlencode');

//address - which you want to convert to lat, lng
var address = urlencode('台南市永康區');
//url - google geocoding api url
var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=TYPE_YOUR_KEY_HERE';

sendRequest("GET", url).then(
    function(response) {

        //parse json to object
        var result = JSON.parse(response.text);

        var lat = JSON.parse(response.text).results[0].geometry.location.lat;
        var lng = JSON.parse(response.text).results[0].geometry.location.lng;

    },
    function(error) {
        console.error(error);
    }
)
