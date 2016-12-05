'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function () {
        $scope.authError = null;
        var url = 'http://127.0.0.1:8080/login';
        $http({
            method: 'POST',
            url: url,
            data: {
                username: $scope.user.name,
                password: $scope.user.password
            },
            headers: {'Content-Type': 'application/json;charset=utf-8'}
        }).then(function (response) {
            if (response.success) {
                $scope.authError = '用户名或密码错误，请重新输入';
            } else {
                $state.go('app.dashboard-v1');
            }
        }, function (x) {
            $scope.authError = 'Server Error';
        });
    };
}])
;