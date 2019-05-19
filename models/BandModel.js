const mongoose = require('mongoose');
const BandSchema = require('../schemas/BandSchema');

const BandModel = mongoose.model('Band', BandSchema);

module.exports = BandModel;
