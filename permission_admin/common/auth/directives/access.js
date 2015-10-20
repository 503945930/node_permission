 angular.module(auth_name).directive('access', [
        auth_services_authorization,
        function (auth_services_authorization) {
            return {
              restrict: 'A',
              link: function (scope, element, attrs) {
                  var makeVisible = function () {
                          element.removeClass('hidden');
                      },
                      makeHidden = function () {
                          element.addClass('hidden');
                      },
                      determineVisibility = function (resetFirst) {
                          var result;
                          if (resetFirst) {
                              makeVisible();
                          }
                          console.log(attrs.accessPermissionType);
                          console.log(action);
                          result = auth_services_authorization.authorize(true, action, attrs.accessPermissionType);
                          console.log("result",result);
                          console.log("auth_enums.authorised",auth_enums.authorised.authorised);
                          if (result === auth_enums.authorised.authorised) {
                            console.log("makeVisible");
                              makeVisible();
                          } else {
                              makeHidden();
                          }
                      },           
                      action = attrs.access.split(',');


                  if (action.length > 0) {
                      determineVisibility(true);
                  }
              }
            };
        }]);