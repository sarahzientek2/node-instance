exports.getAllProducts = async function() {
    var MongoClient = require('mongodb').MongoClient
    let client = await MongoClient.connect(
        'mongodb://0.0.0.0:27017',
        {useUnifiedTopology:true}
        )
        let db = client.db('cs3051')
        let result = await db.collection('products')
            find().toArray()
        client.close();
        console.log(result)
        return result
    }
    
      exports.getOneProduct = async function(productId) {
    var MongoClient = require('mongodb').MongoClient
    let client = await MongoClient.connect(
        'mongodb://0.0.0.0:27017',
        {useUnifiedTopology:true}
        )
        let db = client.db('cs3051')
        let result = await db.collection('products').
            find({'_id': productId}).toArray()
        client.close();
        console.log(result)
        return result
    }