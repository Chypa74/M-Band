const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const BandModel = require('../../models/BandModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { band_id } = argv;

BandModel.findOne({ _id: band_id }, function(err, band) {
  console.log(band);
  mongoose.disconnect();
});
