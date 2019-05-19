const mongoose = require('mongoose');
const BandModel = require('./models/BandModel');
const UserModel = require('./models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network'
});

UserModel.findOne({ _id: '5ce18e00ca9fd9c8775a6d39' }, function(err, user) {
  const userId = user._id;

  const band = new BandModel({
    name: 'Imagine dragons',
    creator: userId,
    users: []
  });

  band.save(function(err, q) {
    console.log('Saved ----');
    console.log(q);

    mongoose.disconnect(); // отключение от базы данных

    if (err) return console.log(err);

    console.log('Сохранен объект', user);
  });
});
