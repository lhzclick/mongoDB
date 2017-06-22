var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://10.0.0.182:27017/mydb'; //数据库为

var insertData = function(db, callback) {
        //连接并创建表 site
        var collection = db.collection('site');
        //插入数据
        var data = {name:'a',age:18};
        collection.insert(data, function(err, result) {
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
        insertData(db, function(result) {
                console.log(result);
                db.close();
        });
});