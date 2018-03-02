// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a977b187d8fdd55e3bf8543')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((docs) => {
  //   console.log(`Todos count: ${docs}`);
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: /Matthew/}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
      console.log(`Unable to fetch Users ${err}`);
    });


  // db.close();
});
