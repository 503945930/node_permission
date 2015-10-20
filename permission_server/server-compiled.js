/**
 * Created by Administrator on 2015/10/17 0017.
 */
'use strict';

var odata = require('node-odata'),
    morgan = require('morgan'),
    domainError = require('./middleware/domainError'),
    errorhandler = require('errorhandler'),
    cors = require('cors');

//config
var config = require("./config/dev_config");

//connect mongodb
var server = odata('mongodb://localhost/permission_test');
odata.resources = server.resources;
//middleware

server.use(require("./middleware/authorization"));
server.use(domainError());
server.use(cors({
    exposedHeaders: "authorization"
}));
server.use(morgan("short"));

if (config.dev_env === 'development') {
    // only use in development
    server.use(errorhandler());
}

//server set
server.set('prefix', "v1");

//functions
server.use(require('./functions/login'));

//resources
server.use(require('./resources/system/user'));
server.listen(config.dev_por || config.pro_por, function () {

    require('./bootstrap/init-data')['import']();
    console.log('Express server listening on port ' + process.env.PORT || 40002);
});

//# sourceMappingURL=server-compiled.js.map