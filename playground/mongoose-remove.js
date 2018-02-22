const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result)
});

Todo.findByIdAndRemove('5a8e9ac9ead49c1af6a9ded4').then((todo) =>{
  console.log(todo);
})
