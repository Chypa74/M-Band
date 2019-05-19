const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BandSchema = new Schema({
  name: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = BandSchema;
