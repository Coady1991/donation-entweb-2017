'use strict';

const assert = require('chai').assert;
const DonationService = require('./donation-service');
const fixtures = require('./fixtures.json');

suite('Candidate API tests', function () {

  let candidates = fixtures.candidates;
  let newCandidate = fixtures.newCandidate;

  const donationService = new DonationService('http://localhost:4000');

  test('create a candidate', function () {
    const returnedCandidate = donationService.createCandidate(newCandidate);
    assert.equal(returnedCandidate.firstName, newCandidate.firstName);
    assert.equal(returnedCandidate.lastName, newCandidate.lastName);
    assert.equal(returnedCandidate.office, newCandidate.office);
    assert.isDefined(returnedCandidate._id);
  });
});