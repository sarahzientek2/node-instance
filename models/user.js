exports.getAllUsers = async function() {
    var MongoClient = require('mongodb').MongoClient
    let client = await MongoClient.connect(
        'mongodb://0.0.0.0:27017',
        {useUnifiedTopology:true}
        )
        let db = client.db('cs3051')
        let result = await db.collection('users').
            find().toArray()
        client.close();
        console.log(result)
        return result
    }
    exports.getOneUser = async function(userId) {
    var MongoClient = require('mongodb').MongoClient
    let client = await MongoClient.connect(
        'mongodb://0.0.0.0:27017',
        {useUnifiedTopology:true}
        )
        let db = client.db('cs3051')
        let result = await db.collection('users').
            find({'_id': userId}).toArray()
        client.close();
        console.log(result)
        return result
    }