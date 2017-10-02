'use strict'

const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  amount: Number,
  method: String,
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
