/**
 * Created by Administrator on 2015/9/13 0013.
 */
/**
 * Created by Administrator on 2015/9/6 0006.
 */
'use strict';

var crypto = require('crypto'),
    func = require('node-odata').Function,
    resources = require('node-odata').resources,
    co = require('co');
router = func();

//注册回调
router.post('/login', function (req, res, next) {
    // console.log(req.body);
    var account, pwd;
    account = req.body.account;
    pwd = req.body.password;
    console.log(account);
    co(regeneratorRuntime.mark(function callee$1$0() {
        var user;
        return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return resources.users.findOne({
                        "password": pwd
                    }).or([{
                        "account": account
                    }, {
                        "email": account
                    }]);

                case 2:
                    user = context$2$0.sent;

                    console.log(user);
                    user.token = crypto.createHash("md5").update(new Date() + pwd).digest("hex");
                    user.save();
                    return context$2$0.abrupt('return', user);

                case 7:
                case 'end':
                    return context$2$0.stop();
            }
        }, callee$1$0, this);
    })).then(function (user) {
        res.set("authorization", user.token);
        res.json({
            account: user.account,
            password: user.password,
            email: user.email,
            permission: user.permission,
            states: user.states
        });
    })['catch'](function (err) {
        console.log(err);
        return res.status(401).send("fail to login");
    });
});

router.post('/auto-login', function (req, res, next) {
    if (!req.user) {
        return res.status(401).send("fail to auto-login");
    }
    return res.json({
        name: req.user.name,
        loginName: req.user.loginName,
        email: req.user.email,
        gravatar: req.user.gravatar,
        disabled: req.user.disabled
    });
});

router.post('/logoff', function (req, res, next) {
    var token;
    token = req.get("authorization");
    return resources.admins.findOne({
        token: token
    }).exec(function (err, user) {
        if (!user) {
            return res.status(400).send("User not found.");
        }
        user.token = null;
        user.save();
        return res.json({
            name: user.name,
            loginName: user.loginName,
            email: user.email,
            gravatar: user.gravatar,
            disabled: user.disabled
        });
    });
});

module.exports = router;

//# sourceMappingURL=login-compiled.js.map