angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {

        // Now set up the states
        $stateProvider
            .state('bt2', {
                url: "/bt2",
                views: {
                    "header": {
                        templateUrl: "common/tpl/index/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "app/tpl/bootstrap2/content.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
                
            })
            .state('bt3', {
                url: '/bt3',
                views: {
                    "header": {
                        templateUrl: "common/tpl/index/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "app/tpl/bootstrap3/content.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            })
            .state('bt4', {
                url: '/bt4',
                views: {
                    "header": {
                        templateUrl: "common/tpl/index/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "app/tpl/bootstrap4/content.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            })
            .state('jquery', {
                url: '/jquery',
                views: {
                    "header": {
                        templateUrl: "common/tpl/index/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "app/tpl/jquery/content.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            })
            .state('less', {
                url: '/less',
                views: {
                    "header": {
                        templateUrl: "common/tpl/index/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "app/tpl/less/content.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            })
            .state('salary', {
                url: '/salary',
                views: {
                    "header": {
                        templateUrl: "common/tpl/index/header.tpl.html"
                    },
                    "content": {
                        templateUrl: "app/tpl/salary/content.tpl.html"
                    },
                    "footer": {
                        templateUrl: "common/tpl/index/footer.tpl.html"
                    }
                }
            });
    });
