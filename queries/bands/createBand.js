const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const BandModel = require('../../models/BandModel');
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network'
});

const { creator_id, band_name } = argv;

UserModel.findOne({ _id: creator_id }, function(err, user) {
  if (err) {
    console.log(err);
    return mongoose.disconnect();
  }

  const userId = user._id;

  const band = new BandModel({
    name: band_name,
    creator: userId,
    users: []
  });

  band.save(function(err, q) {
    mongoose.disconnect();

    if (err) return console.log(err);
  });
});
