//客户端
const MongoClient = require('mongodb').MongoClient
// Database Name
const dbName = 'china-location';
//连接数据库服务器
let findCity = ({location, city, province, leader}, callback) => MongoClient.connect(
    'mongodb://localhost:3000',
    {
        useNewUrlParser: true,
    },
    function (err, client) {
        if (err) throw err
        console.log('连接成功');
        //连接 或 创建数据库
        const db = client.db(dbName)
        let coll = db.collection('location') //创建个集合
        let arr = []
        //连接集合
        if (location !== 'undefined') {
            arr = coll.find({
                $or: [
                    {"cityZh": location},
                    {"provinceZh": location},
                    {"leaderZh": location}
                ]
            })
        } else {
            let query = {}
            city !== "undefined" && (query.cityZh = city);
            province !== "undefined" && (query.provinceZh = province);
            leader !== "undefined" && (query.leaderZh = leader)
            arr = coll.find(query)
        }
        // /*  查找
        arr.toArray(function (err, docs) { //转换为数组
            if (err) throw err
            callback(docs)
            client.close() //关闭
        })
    })
// "cityZh": "朝阳", "provinceZh": "北京", "leaderZh": "北京"
module.exports = findCity