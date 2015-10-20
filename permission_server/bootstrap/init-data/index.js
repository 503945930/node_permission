/**
 * Created by Administrator on 2015/10/17 0017.
 */
var resources=require('node-odata').resources;
var initData=function(model,path){
    return require(path).forEach(function(item){
        var data=new model(item);
        data.save();
        return console.log("data init: " + path + " import successful.");
    });
};


module.exports={
    "import":function(){
        return resources.users.find().exec(function(err,users){
            if(!users.length){
                return initData(resources.users, "./system/user.json");
            }
        })
    }
};