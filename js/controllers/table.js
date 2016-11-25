app.controller('UserManagerController', ['$scope', '$http', '$state', '$modal', '$log', function ($scope, $http, $state, $modal, $log) {
    // $scope.users = [{id:'1',name:'Lijx',username:'Lijx'}, {id:'2',name:'Lijx',username:'Lijx'}, {id:'3',name:'Lijx',username:'Lijx'}];
    $http({
        method: 'GET',
        url: 'http://127.0.0.1:8080/user/all',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then(function (response) {
        if (response.data.success) {
            $scope.users = response.data.data;
        } else {
            $scope.authError = '用户名或密码错误，请重新输入';
        }
    }, function (x) {
        $scope.authError = 'Server Error';
    });

    $http({
        method: 'GET',
        url: 'http://127.0.0.1:8080/role/getAll',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then(function (response) {
        if (response.data.success) {
            $scope.roles = response.data.data;
        } else {
            $scope.authError = '用户名或密码错误，请重新输入';
        }
    }, function (x) {
        $scope.authError = 'Server Error';
    });

    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.roles;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


}]);