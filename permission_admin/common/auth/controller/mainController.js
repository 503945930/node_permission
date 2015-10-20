angular.module(auth_name).controller('MainController', ['$scope', '$location',auth_services_authentication, function($scope, $location,auth_services_authentication) {
    $scope.$on(auth_events.userLoggedIn, function(event, mass) {
        console.log("userLoggedIn");
        
        console.log(mass.router);
        return $location.path($scope.__returnUrl ||'/').replace();
    });
    $scope.$on(auth_events.userLoggedOut, function(event, mass) {
        console.log("userLoggedOut");
        console.log("userLoggedOut",$location.path())
        auth_services_authentication.DeleteCurrentLoginUser();
        return $location.path('/login').replace();
    });
}]);
