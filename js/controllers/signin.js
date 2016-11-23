'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function () {
        $scope.authError = null;
        var url = 'http://127.0.0.1:8080/mooc/login';
        $http({
            method: 'POST',
            url: url,
            data: {
                email: $scope.user.email,
                password: $scope.user.password
            },
            headers: {'Content-Type': 'application/json;charset=utf-8'}
        }).then(function (response) {
            debugger
            if (!response.data) {
                $scope.authError = 'Email or Password not right';
            } else {
                $state.go('app.dashboard-v1');
            }
        }, function (x) {
            $scope.authError = 'Server Error';
        });
    };
}])
;