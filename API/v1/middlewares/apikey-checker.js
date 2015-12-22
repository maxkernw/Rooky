'use strict';
module.exports = function(req, res, next) {
    //Check if the current request has an api key in url or headers.
    //Check if the key matches in the local storage.
    //invoke Next() if key exists
    var key = req.get('x-key');

    if (isValid(key)) {

    }

    next()
}


function isValid(key){
    var data = '../data/data.js'

    data.forEach(function() {
        console.log('a[' + index + '] = ' + element);
    })
}