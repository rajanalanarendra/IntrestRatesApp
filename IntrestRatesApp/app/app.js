var app = angular.module('IntrestRateApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'angucomplete', 'angular-growl']);

app.factory("appShareData", function () {
    return { value: 0 };
});

app.config(['growlProvider', function (growlProvider) {

    growlProvider.globalTimeToLive(30000);
    //growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition('top-center');
    growlProvider.onlyUniqueMessages(true);

}]);

app.config(function ($routeProvider){

    $routeProvider.when('/home', {
        controller: 'homeController',
        templateUrl: '/app/views/home.html'
    });
    
    $routeProvider.otherwise({ redirectTo: '/home' });

});

//var serviceBase = 'http://localhost:26264/';
var serviceBase = 'https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=5f2b18a8-0883-4769-a635-879c63d3caac';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'Console'
});

var serviceBase2 = 'https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=5f2b18a8-0883-4769-a635-879c63d3caac';

app.constant('ngAuthSettings2', {
    apiServiceBaseUri: serviceBase2,
    clientId: 'intrestrateapp'
});