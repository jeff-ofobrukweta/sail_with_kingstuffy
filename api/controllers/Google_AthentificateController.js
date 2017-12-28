/**
 * Google_AthentificateController
 *
 * @description :: Server-side logic for managing google_athentificates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


// v0.1.20 is exposing a singleton so there is no need for `new`
// as a consequence of the way require cache modules gm was behaving like a global object
// v0.1.20 allowed the user to specify the configuration after the requirement like so
//this part of the code is for geocoding and my intent is to track movement through google-map api via gps-tracking
var NodeGeocoder = require('node-geocoder');
var distance = require('google-distance-matrix');

  
    module.exports={
        location(req){
            var options = {
                provider: 'google',

                // Optional depending on the providers
                httpAdapter: 'https', // Default
                apiKey: 'AIzaSyB9bg8T4harZl5SCDTiw6PO5f3a0Y7X5nI', // for Mapquest, OpenCage, Google Premier
                formatter: null         // 'gpx', 'string', ...
            };

            var geocoder = NodeGeocoder(options);

            // Or using Promise
            const body = req.body
            const value = 'ugheli'
            geocoder.geocode(value)
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (err) {
                    console.log(err);
                });
        },
        GoogleMapsDistanceMatrixAPI(){
           
            var origins = ['San Francisco CA', '40.7421,-73.9914'];
            var destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554', 'Honolulu'];

            distance.key('AIzaSyDcEEnaR-eW5fqM5Ofv1vTX6BT0yR85r24');
            distance.units('imperial');

            distance.matrix(origins, destinations, function (err, distances) {
                if (err) {
                    return console.log(err);
                }
                if (!distances) {
                    return console.log('no distances');
                }
                if (distances.status == 'OK') {
                    for (var i = 0; i < origins.length; i++) {
                        for (var j = 0; j < destinations.length; j++) {
                            var origin = distances.origin_addresses[i];
                            var destination = distances.destination_addresses[j];
                            if (distances.rows[0].elements[j].status == 'OK') {
                                var distance = distances.rows[i].elements[j].distance.text;
                                console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                            } else {
                                console.log(destination + ' is not reachable by land from ' + origin);
                            }
                        }
                    }
                }
            });
        } 
       };

