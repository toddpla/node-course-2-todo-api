var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
})

// var newUser = new User({
//   email: 'toddpla@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined,2));
// }, (e) => {
//   console.log('Unable to save User.')
// });

module.exports = {User};
