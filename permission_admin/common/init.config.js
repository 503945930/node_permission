/*auth.config*/
var auth_name = 'wy.auth';
var auth_controller_loginCtrl = 'loginCtrl';
var auth_services_authentication = 'authentication';
var auth_services_authorization = 'authorization';
var auth_enums = {
    authorised: {
        authorised: 0,
        loginRequired: 1,
        notAuthorised: 2
    },
    permissionCheckType: {
        atLeastOne: 0,
        combinationRequired: 1
    }
};
var auth_events = {
    userLoggedIn: 'auth:user:loggedIn',
    userLoggedOut: 'auth:user:loggedOut'
};
/*auth.config end*/
/*core.config*/
var core_name = 'wy.core';
/*core.config end*/
