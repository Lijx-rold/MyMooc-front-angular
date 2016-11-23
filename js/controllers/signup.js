'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function () {
        $scope.authError = null;
        var url = 'http://127.0.0.1:8080/user/save';
        // Try to create
        $http({
            method: 'POST',
            url: url,
            data: {
                name: $scope.user.name,
                email: $scope.user.email,
                password: $scope.user.password
            },
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).then(function (response) {
            debugger
            if (!response.data) {
                $scope.authError = response;
            } else {
                // $state.go('app.dashboard-v1');
                $state.go('access.signin');
            }
        }, function (x) {
            $scope.authError = 'Server Error';
        });
    };
}])
;