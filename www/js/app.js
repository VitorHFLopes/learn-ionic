angular.module('appModule', [
    'ionic',
    'ionic.cloud',
    'ui.router'
])

    .run(function($ionicPlatform) {

        $ionicPlatform.ready(function () {
            var push = new Ionic.Push({
                "debug": true
            });

            push.register(function (token) {
                console.log("My Device token:", token.token);
                push.saveToken(token);  // persist the token in the Ionic Platform
            });//end register

            /**
             * Function that creates a BeaconRegion data transfer object.
             *
             * @throws Error if the BeaconRegion parameters are not valid.
             */
            function createBeacon() {

                var uuid = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; // mandatory
                var identifier = 'Lemon'; // mandatory
                var major = 26073; // optional, defaults to wildcard if left empty
                var minor = 16050; // optional, defaults to wildcard if left empty

                // throws an error if the parameters are not valid
                var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

                return beaconRegion;
            }

            var logToDom = function (message) {
                var e = document.createElement('label');
                e.innerText = message;

                var br = document.createElement('br');
                var br2 = document.createElement('br');
                document.body.appendChild(e);
                document.body.appendChild(br);
                document.body.appendChild(br2);

                window.scrollTo(0, window.document.height);
            };

            var delegate = new cordova.plugins.locationManager.Delegate();

            delegate.didDetermineStateForRegion = function (pluginResult) {

                logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

                cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
                    + JSON.stringify(pluginResult));
            };

            delegate.didStartMonitoringForRegion = function (pluginResult) {
                console.log('didStartMonitoringForRegion:', pluginResult);

                logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
            };

            delegate.didRangeBeaconsInRegion = function (pluginResult) {
                logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
            };

            var uuid = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; // mandatory
            var identifier = 'Lemon'; // mandatory
            var major = 26073; // optional, defaults to wildcard if left empty
            var minor = 16050; // optional, defaults to wildcard if left empty
            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

            cordova.plugins.locationManager.setDelegate(delegate);

            // required in iOS 8+
            cordova.plugins.locationManager.requestWhenInUseAuthorization();
            // or cordova.plugins.locationManager.requestAlwaysAuthorization()

            cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
                .fail(function(e) { console.error(e); })
                .done();


        });//end ready

    })

;
