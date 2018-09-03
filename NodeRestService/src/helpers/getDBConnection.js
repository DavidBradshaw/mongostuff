/*/ Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  else{
      console.log("balls");
  }
  /*var dbase = db.db("test");
  dbase.createCollection('testCollection', function(err, collection) {});

  //db.collection('test', function(err, collection) {}); //create collection 'test'

  console.log("collection created");


  var collection = dbase.collection('testCollection'); //set test as the collection
  var doc1 = {'hello':'doc1'};
  var doc2 = {'hello':'doc2'};
  var doc3 = {'hello':'doc3'};

console.log(doc1);

  collection.insertOne(doc3, function(err, result){
      console.log('put something in');
  });
  var resultArray = [];
  const cursor = dbase.collection('testCollection').find({});
  cursor.forEach(function(doc, err){
      console.log('item =' + doc.hello);
  })
  console.log('item = ' + resultArray[0]);
 
  db.close();*/
});*/