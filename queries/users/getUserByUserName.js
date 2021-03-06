const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { user_name } = argv;

UserModel.findOne({ user_name: user_name }, function(err, docs) {
  console.log(docs);
  mongoose.disconnect();
  if (err) return console.log(err);
});
