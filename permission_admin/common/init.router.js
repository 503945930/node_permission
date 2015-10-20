angular.module('wy.common')
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('login', {
                url: "/login",
                views: {
                    "header": {
                        templateUrl: "common/tpl/login/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "common/tpl/login/login.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            })
            .state('home', {
                url: '/',
                views: {
                    "header": {
                        templateUrl: "common/tpl/index/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "common/tpl/index/main.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            })
            .state('logout', {
                url: '/logout',
                views: {
                    "header": {
                        templateUrl: "common/tpl/login/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "common/tpl/login/login.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            });
    });
