var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Blobs', function() {
    it('should get a 200 response', function(done) {
        chai.request(server)
        .get('/ping')
        .end(function(err, res) {
            res.should.have.status(200)
            done()
        })
    })
});