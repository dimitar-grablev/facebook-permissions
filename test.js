"use strict";

var facebookPermissions = require('./index.js');

var test = module.exports = {};

test['Getting permnissions for a bad facebook account.'] = function (test) {
    facebookPermissions("100008978948872","CAACEdEose0cjX5...", function(data) {
            test.expect(1);
            test.equal(JSON.stringify(data), '{"error":{"message":"Invalid OAuth access token.","type":"OAuthException","code":190}}');
            test.done();
        });
};