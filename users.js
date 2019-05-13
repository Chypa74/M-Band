const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network'
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: Number,
  user_name: String,
  type: String,
  group: Object,
  messages: [
    {
      isItSent: Boolean,
      user_id: Number,
      user_name: String,
      text: String,
      date: Date
    }
  ],
  friends: [{ user_id: Number, user_name: String }],
  _email: String,
  _password: String
});

const User = mongoose.model('user', userSchema);

const User1 = new User({
  user_id: 2,
  user_name: 'Michael Jackson',
  type: 'musicion',
  group: null,
  messages: [],
  friends: [{ user_id: 1, user_name: 'John' }],
  _email: 'jackso@gmail.com',
  _password: '12333'
});

User1.save(function(err, q) {
  console.log('Saved ----');
  console.log(q);
});
