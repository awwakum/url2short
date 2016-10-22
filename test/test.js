var superagent = require('superagent');
var supertest = require('supertest');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();
var api = supertest('http://url2short.herokuapp.com');

chai.use(chaiHttp);

describe('url short service', function() {
	var link = 'http://google.com';

	it('should return a 200 response', function(done) {
		api.get('/')
		.expect(200, done);
	});

	it('test get /', function(done) {
		chai.request('http://url2short.herokuapp.com')
		.get('/')
		.end(function(e, res) {
			res.should.have.status(200);
			done();
		});
	});

	it('res to new link', function(done) {
		superagent.get('http://url2short.herokuapp.com/new/' + link)
		.end(function(e, res) {
			console.log(res.text);
			expect(e).to.eql(null);
			expect(typeof res.body).to.eql('object');
			expect(res.text.length).to.be.above(0);
			done();
		});
	});

	it('test output', function(done) {
		chai.request('http://url2short.herokuapp.com')
		.get('/output')
		.end(function(e, res) {
			console.log(res.body[0]);
			res.should.have.status(200);
			expect(res).to.be.an('object');
			expect(res.body.length).to.be.above(0);
			expect(res.body[0]).to.have.property('_id');
			expect(res.body[0]._id).to.not.eql(null);
			expect(res.body[0].origUrl).to.eql('http://linux.org.ru');
			done();
		});
	});

});