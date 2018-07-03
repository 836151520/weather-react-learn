//客户端
const MongoClient = require('mongodb').MongoClient
// Database Name
const dbName = 'china-location'

let findCity = (str, callback) => MongoClient.connect(
    'mongodb://localhost:27017',
    {useNewUrlParser: true},
    function (err, client) {
        if (err) console.log(err)
        else {
            const db = client.db(dbName)

            db.collection('location')
                .find({
                    $or: [
                        {"cityZh": str},
                        {"provinceZh": str},
                        {"leaderZh": str},
                    ]
                })
                .toArray(function (err, docs) { //转换为数组
                    if (err) throw err
                    callback(docs)
                })
        }
        client.close()
    }
)

module.exports = findCity