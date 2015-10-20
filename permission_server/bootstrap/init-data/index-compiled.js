/**
 * Created by Administrator on 2015/10/17 0017.
 */
"use strict";

var resources = require('node-odata').resources;
var initData = function initData(model, path) {
    return require(path).forEach(function (item) {
        var data = new model(item);
        data.save();
        return console.log("data init: " + path + " import successful.");
    });
};

module.exports = {
    "import": function _import() {
        return resources.users.find().exec(function (err, users) {
            if (!users.length) {
                return initData(resources.users, "./system/user.json");
            }
        });
    }
};

//# sourceMappingURL=index-compiled.js.map