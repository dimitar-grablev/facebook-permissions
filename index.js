"use strict";
var https=require('https');

/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param {string} Facebook user id.
 * @param {string} Facebook access token.
 * @return {object} Facebook permissions.
 */

var facebookPermissions = module.exports = function facebookPermissions(userId, accessToken){

    var options = {
        path: 'https://graph.facebook.com/' + userId + '/permissions?access_token=' + accessToken
    };

    https.get(options,function(res){
        var data = '';

        res.on('data', function (chunk) {
            data += chunk;
        });

        res.on('end', function() {
     return eval("(" + data + ")");
        });
    });
}