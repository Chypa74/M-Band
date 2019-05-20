const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { user_id, friend_name } = argv;

UserModel.findOne({ _id: user_id })
  .populate({
    path: 'friends',
    select: 'user_name',
    match: { user_name: { $eq: friend_name } }
  })
  .exec(function(err, user) {
    console.log(user.friends);
    mongoose.disconnect();
  });
