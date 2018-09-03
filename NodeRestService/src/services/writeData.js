var axios = require('axios')
//var connector = require('../helpers/getDBConnection')
// Retrieve
var MongoClient = require('mongodb').MongoClient;

module.exports = {
  writeData: async function (writeDataParam) {
console.log('got here 2');
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
     if(!err) {
        console.log("We are connected");
     }
     else{
        console.log("balls");
     }
  
     console.log("writing data");
    var dbase = db.db("test");
    dbase.createCollection('testCollection', function(err, collection) {});

    var collection = dbase.collection('testCollection'); //set test as the collection
    var doc1 = {'hello':'doc1'};
    var doc2 = {'hello':'doc2'};
    var doc3 = {'hello':'doc3'};
     
    collection.insertOne(doc3, function(err, result){
        console.log('put something in');
    });

    })
  }
}