// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })
  //deleteOne
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete

  // db.collection('Users').deleteMany({name: 'Todd Langford-Archer'});

  db.collection('Users').findOneAndDelete({
    name: 'Todd Langford-Archer'
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2))
  });

  // db.collection('Users').find({name: 'Todd Langford-Archer'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined,2));
  // })

  // db.close();
});
