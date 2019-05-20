const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { user_id, key, value } = argv;

UserModel.findByIdAndUpdate(user_id, { [key]: value }, null, function(
  err,
  res
) {
  if (err) {
    return mongoose.disconnect();
  }
  console.log(res);
  mongoose.disconnect();
});
