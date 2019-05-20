const mongoose = require('mongoose');
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

UserModel.find(null, function(err, docs) {
  console.log(docs);
  mongoose.disconnect();
});
