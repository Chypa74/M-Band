const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network'
});

const Schema = mongoose.Schema;

const bandSchema = new Schema({
  band_id: Number,
  name: String,
  creator: { user_id: Number, user_name: String },
  users: [
    { user_id: Number, user_name: String },
    { user_id: Number, user_name: String }
  ]
});

const Band = mongoose.model('band', bandSchema);

const Band1 = new Band({
  band_id: 1,
  name: 'Imagine dragons',
  creator: { user_id: 1, user_name: 'John Doe' },
  users: [
    { user_id: 2, user_name: 'Mickhael' },
    { user_id: 3, user_name: 'Nick' }
  ]
});

Band1.save(function(err, q) {
  console.log('Saved ----');
  console.log(q);
});
