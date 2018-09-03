var axios = require('axios')
//var connector = require('../helpers/getDBConnection')
var MongoClient = require('mongodb').MongoClient;

module.exports = {
  readData: async function (readDataParam) {

    console.log('me first');
    
    // Connect to the db
    return await MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        else{
            console.log("balls");
        }
        var dbase = db.db("test");
        return 'hello'; //dbase.collection('testCollection').find({}).toArray();
    })
 }
}