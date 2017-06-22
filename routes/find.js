const mongodb = require('mongodb');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://10.0.0.182:27017/mydb";
var selectData = function(db, callback) {
        //连接到表
        var collection = db.collection('site');
        //查询数据
        var whereStr = {"name":'a'};
        collection.find(whereStr).toArray(function(err, result) {
                if(err)
                {
                        console.log('Error:'+ err);
                        return;
                }
                callback(result);
        });
}

MongoClient.connect(url, function(err, db) {
        console.log("连接成功！");
        selectData(db, function(result) {
                console.log(result);
                db.close();
        });
});