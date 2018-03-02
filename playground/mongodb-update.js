// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a989c3b7a599016a541d4e0')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({name: 'Frank'},
  {
    $set: {name: 'Matthew'},
    $inc: { age: 1 }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) =>{
      console.log('Unable to fetch todos', err);
    });

  // db.close();
});
