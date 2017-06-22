var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://10.0.0.182:27017/mydb';

var delData = function(db, callback) {
        //连接到表
        var collection = db.collection('site');
        //删除数据
        var whereStr = {"name":'a'};
        collection.remove(whereStr, function(err, result) {
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
        delData(db, function(result) {
                console.log(result);
                db.close();
        });
});