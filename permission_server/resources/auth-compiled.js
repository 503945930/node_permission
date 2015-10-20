/**
 * Created by Administrator on 2015/10/17 0017.
 */
"use strict";

module.exports = {
    admin: function admin(req) {
        console.log(!!req.user);
        return !!req.user;
    }
};

//# sourceMappingURL=auth-compiled.js.map