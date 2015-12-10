'use strict'
var documentation = {}

documentation.getDocs = function(req, res, endpoints) {
    if (req.params.format === 'json'){
        docsAsJson(req, res, endpoints);
    }
    res.status(400).send('Could not find format. Supported formats are JSON')
};

function docsAsJson(req, res, endpoints) {
    var output = {}
    output.endpoints = endpoints
    res.status(200).send(output)
}

module.exports = documentation