angular.module('app', ['ui.router', 'wy.common'])
    .config(['$locationProvider', function($locationProvider) {
        return $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
