/**
 * Created by Administrator on 2015/10/17 0017.
 */
module.exports = {
    admin: function(req) {
        console.log(!!req.user);
        return !!req.user;
    }
};