const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  passport: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  dateIn:{
    type:String,
    required:true,
  },
  dateOut:{
    type:String,
    required:true,
  }
});

module.exports = mongoose.model('Guest',guestSchema);
