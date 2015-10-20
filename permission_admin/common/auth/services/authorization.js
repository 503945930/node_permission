angular.module(auth_name).factory(auth_services_authorization, [
    auth_services_authentication,
    function(auth_services_authentication) {
        var authorize = function(loginRequired, requiredPermissions, permissionCheckType) {
            var result = auth_enums.authorised.authorised,
                user = auth_services_authentication.getCurrentLoginUser(),
                loweredPermissions = [],
                hasPermission = true,
                permission, i;

            permissionCheckType = permissionCheckType || auth_enums.permissionCheckType.atLeastOne;
            if(user===undefined){
                hasPermission=false;
            }
            else if (user!==undefined&&requiredPermissions) {
                loweredPermissions = [];
                angular.forEach(user.permissions, function(permission) {
                    loweredPermissions.push(permission.toLowerCase());
                });

                for (i = 0; i < requiredPermissions.length; i += 1) {

                    permission = requiredPermissions[i].toLowerCase();
                    console.log("permission", permission);
                    if (permissionCheckType === auth_enums.permissionCheckType.combinationRequired) {
                        hasPermission = hasPermission && loweredPermissions.indexOf(permission) > -1;
                        // if all the permissions are required and hasPermission is false there is no point carrying on
                        if (hasPermission === false) {
                            break;
                        }
                    } else if (permissionCheckType === auth_enums.permissionCheckType.atLeastOne) {
                        hasPermission = loweredPermissions.indexOf(permission) > -1;
                        console.log(hasPermission);
                        // if we only need one of the permissions and we have it there is no point carrying on
                        if (hasPermission) {
                            break;
                        }
                    }
                }

                result = hasPermission ? auth_enums.authorised.authorised : auth_enums.authorised.notAuthorised;
                console.log("result",result)
            }

            return result;
        };

        return {
            authorize: authorize
        };
    }
]);
