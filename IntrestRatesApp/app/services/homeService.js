'use strict';
app.factory('homeService', ['$http', 'ngAuthSettings2', function ($http, ngAuthSettings2) {

    var serviceBase = ngAuthSettings2.apiServiceBaseUri;

    var intrestRatesServiceFactory = {};

    var _getIntrestRates = function () {
        return $http.get(serviceBase).then(function (results) {
            return results;
        });
    };

    var _getIntrestRatesByParam = function (param) {
        return $http.get(serviceBase + param).then(function (results) {
            return results;
        });
    };

    intrestRatesServiceFactory.getIntrestRates = _getIntrestRates;
    intrestRatesServiceFactory.getIntrestRatesByParam = _getIntrestRatesByParam;

    return intrestRatesServiceFactory;
}]);