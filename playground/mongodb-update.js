// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a8d6506d1192d2ba82e8121')
  }, {
  $set: {
    name: 'James'
  },
  $inc: {
    age: 1
  },
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
