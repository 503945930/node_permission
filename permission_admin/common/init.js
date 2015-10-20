angular.module('wy.common', ['ui.router', auth_name, 'wy.core'])
    .run(['$location', '$rootScope', auth_services_authentication, function($location, $rootScope, auth_services_authentication) {
        var current = $location.path();
        console.log("current", current);
        if (current !== '/login') {
            $rootScope.__returnUrl = current;
        }

        return auth_services_authentication.autoLogin().then(function(currentUser) {
            console.log("qq");

            return $rootScope.$broadcast(auth_events.userLoggedIn, currentUser);
        }, function(err) {
            //$location.path('/login').replace();
            return $rootScope.$broadcast(auth_events.userLoggedOut, "");
        })
    }])
    .run(['$rootScope', auth_services_authentication, function($rootScope, auth_services_authentication) {


        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                console.log("$stateChangeStart", toState.url);
                var routerArr = auth_services_authentication.getCurrentLoginUser();
                console.log("$stateChangeStart44", routerArr);
                if (routerArr === undefined||routerArr ==="") {
                   
                    return $rootScope.$broadcast(auth_events.userLoggedOut, "");
                } else if (toState.url !== "/") {
                    console.log("$stateChangeStart",routerArr.router.indexOf(toState.url))
                    if(routerArr.router.indexOf(toState.url)<0){
                        return $rootScope.$broadcast(auth_events.userLoggedOut, "");
                    }               
                }



            });

    }]);
