const mongoose = require('mongoose');
const BandModel = require('../../models/BandModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

BandModel.find(null, function(err, docs) {
  console.log(docs);
  mongoose.disconnect();
});
