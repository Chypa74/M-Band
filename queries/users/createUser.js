const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { user_name, type, email, password } = argv;

const user = new UserModel({
  user_name: user_name,
  type: type,
  group: null,
  messages: [],
  friends: [],
  _email: email,
  _password: password
});

user.save(function(err, q) {
  console.log('Saved ----');
  console.log(q);

  mongoose.disconnect();

  if (err) return console.log(err);

  console.log('Сохранен объект', user);
});
