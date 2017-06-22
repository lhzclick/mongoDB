/**
 * Created by Administrator on 2017/6/21.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://10.0.0.182:27017/mydb';

var updateData = function(db, callback) {
        //连接到表
        var collection = db.collection('site');
        //更新数据
        var whereStr = {"name":'a'};
        var updateStr = {$set: {'age':19}};
        collection.update(whereStr,updateStr, function(err, result) {
                if(err)
                {
                        console.log('Error:'+ err);
                        return;
                }
                callback(result);
        });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        updateData(db, function(result) {
                console.log(result);
                db.close();
        });
});