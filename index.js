"use strict";
var https=require('https');

/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param {string} Facebook user id.
 * @param {string} Facebook access token.
 * @param {function} callback Function executed when permissions are retrieved.
 */

var facebookPermissions = module.exports = function facebookPermissions(userId, accessToken, cb){

    var options = {
        host: 'graph.facebook.com',
        path: '/' + userId + '/permissions?access_token=' + accessToken
    };

    https.get(options, function(res){
        var data = '';

        res.on('data', function (chunk) {
            data += chunk;
        });

        res.on('end', function() {
            cb(eval("(" + data + ")"));
        });
    });
}