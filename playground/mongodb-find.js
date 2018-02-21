// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a8d5e53aede302ac4af5eff")
  //     }).toArray().then((docs) => {
  //         console.log('Todos');
  //         console.log(JSON.stringify(docs, undefined, 2));
  //       }, (err) => {
  //         console.log('Unable to fetch todos', err);
  //       });

  // db.collection('Todos').find().count().then((count) => {
  //         console.log(`Todos count: ${count}`);
  //         // console.log(JSON.stringify(docs, undefined, 2));
  //       }, (err) => {
  //         console.log('Unable to fetch todos', err);
  //       });

  db.collection('Users').find({name: 'Todd Langford-Archer'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined,2));
  })

  // db.close();
});
