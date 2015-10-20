/**
 * Created by Administrator on 2015/10/17 0017.
 */
var user={
    account:String,
    email:String,
    password:String,
    role:String,
    token:{type: String, default: " "},
    permission:[String],
    router:[String],
    userInfo:{IDCard:String,age:{type: Number, default: 0},sex:String},
    createInfo:{createTime: {type: Date, default: Date.now},perple:String},
    updateInfo:{createTime: {type: Date, default: Date.now},perple:String},
    states:{type:Boolean,default:true}

};

module.exports=user;