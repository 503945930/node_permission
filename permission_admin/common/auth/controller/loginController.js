angular.module(auth_name).controller(auth_controller_loginCtrl, [
    '$scope',
    '$rootScope',
    '$location',
    auth_services_authentication,
    function($scope, $rootScope, $location, auth_services_authentication) {
        $scope.loginModel = {
            account: "admin",
            password: "admin"
        };
        $scope.isBusy = false;
        $scope.login = function() {
            $scope.isBusy = true;
            console.log("loginCtrl", $scope.loginModel)
            return auth_services_authentication.login($scope.loginModel).then(function(currentUser) {
                console.log("login successful");
                return $rootScope.$broadcast(auth_events.userLoggedIn, currentUser);
            }, function() {})['finally'](function() {
                $scope.isBusy = false;
            });
        };
        $scope.logout = function() {
            $scope.isBusy = false;
            console.log("logout");
            return auth_services_authentication.logout($scope.loginModel).then(function(currentUser) {
                console.log("logout successful");
                return $rootScope.$broadcast(auth_events.userLoggedOut, "");
            }, function() {})['finally'](function() {});
        };

    }
]);
