// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
  //   console.log(result);
  // });
  // findOneDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: /Matthew/}).then((result) =>{
    console.log(result);
  });

  db.collection('Users').deleteOne({_id: new ObjectID('5a977c97b46f7b56a75096ac')}).then((result) => {
    console.log(result);
  });

  // db.close();
});
