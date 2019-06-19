'use strict';
app.controller('homeController', ['$scope', function ($scope, $location, homeService, growl) {

    $scope.message = "";

    $scope.intrestRatesList = [];
    homeService.getIntrestRates().then(function (results) {
        $scope.intrestRatesList = results.data;
    }, function (error) {
        var err = JSON.stringify(error.data);
        //alert("Error: " + error);
        growl.error(err, { title: 'Error' });
    });

    $scope.sort = function (col) {
        $scope.sortCol = col;
        $scope.sortOrder = ($scope.sortCol === col) ? !$scope.sortOrder : false;
    };
    $scope.sort("Date");

    $scope.exportReportData = function () {
        var wb = XLSX.utils.table_to_book(document.getElementById('tblReportData'));
        XLSX.writeFile(wb, "report.xlsx");
    };

    $scope.cancel = function () {
        $location.path('/home');
    };

}]);