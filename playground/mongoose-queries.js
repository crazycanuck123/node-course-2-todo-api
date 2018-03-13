const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

  var userID = '5a9e11ddb1c411b721679caa';

  if(!ObjectID.isValid(userID)){
    console.log('UserID not valid');
  };

// var id = '5aa461e37b728b81045ee80a11';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('ID not found ');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

//User.findById - All 3

User.findById(userID).then((user) =>{
  if(!user){
    return console.log('UserID not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
