const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { user_id } = argv;

UserModel.findOne({ _id: user_id }, function(err, user) {
  console.log(user.messages);
  mongoose.disconnect();
});
