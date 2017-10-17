'use strict';

const Donation = require('../models/donation');
const User = require('../models/user');
const Candidate = require('../models/candidate');

exports.home = {
  handler: function (request, reply) {
    Candidate.find({}).then(candidates => {
      reply.view('home', {
        title: 'Make a Donation',
        candidates: candidates,
      });
    }).catch(err => {
      reply.redirect('/');
    });
  },
};

exports.report = {
  handler: function (request, reply) {
    Donation.find({}).populate('donor').populate('candidate').then(allDonations => {
      let total = 0;
      allDonations.forEach(donation => {
        total += donation.amount;
      });
      reply.view('report', {
        title: 'Donations to Date',
        donations: allDonations,
        total: total,
      });
    }).catch(err => {
      reply.redirect('/');
    });
  },
};

exports.donate = {
  handler: function (request, reply) {
    var userEmail = request.auth.credentials.loggedInUser;
    let userId = null;
    let donation = null;
    User.findOne({ email: userEmail }).then(user => {
      let data = request.payload;
      userId = user._id;
      donation = new Donation(data);
      const rawCandidate = request.payload.candidate.split(',');
      return Candidate.findOne({ lastName: rawCandidate[0], firstName: rawCandidate[1] });
    }).then(candidate => {
      donation.donor = userId;
      donation.candidate = candidate._id;
      return donation.save();
    }).then(newDonation => {
      reply.redirect('/report');
    }).catch(err => {
      reply.redirect('/');
    });
  },
};
