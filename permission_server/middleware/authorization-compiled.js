/**
 * Created by Administrator on 2015/9/6 0006.
 */

'use strict';

var resources = require('node-odata').resources;

module.exports = function (req, res, next) {
    var token;
    token = req.headers.authorization;
    if (!token) {
        return next();
    }
    return resources.users.findOne({
        token: token
    }).exec(function (err, user) {
        if (user && user.states) {
            req.user = user;
        }
        return next();
    });
};

//# sourceMappingURL=authorization-compiled.js.map