const mongoose = require('mongoose');
const UserModel = require('./models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const user = new UserModel({
  _id: new mongoose.Types.ObjectId(),
  user_name: 'Michael Jackson',
  type: 'musician',
  group: null,
  messages: [],
  friends: [],
  _email: 'jackson@gmail.com',
  _password: '12333'
});

user.save(async function(err, q) {
  console.log('Saved ----');
  console.log(q);

  mongoose.disconnect(); // отключение от базы данных

  if (err) return console.log(err);

  console.log('Сохранен объект', user);
});
