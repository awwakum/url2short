var Url = require('./model');

exports.saveUrl = function(req, res, host) {

	if (req.indexOf('http://') !== 0 && req.indexOf('https://') !== 0) 
		req = 'http://' + req;

	Url.findOne({ origUrl: req }, function(err, doc) {
		if (err) throw err;

	if (!doc) { // url is not in database
		var newLink = new Url({
			origUrl: req,
			shortUrl: ''
		});
		newLink.shortify();
		newLink.save(function(err) {
			if (err) throw err;
		});
		res.send('new url is added: ' + newLink.origUrl + '\t Short url is: ' + host + '/' + newLink.shortUrl);
	} // endif
	else res.send('url is found: ' + doc.origUrl + '\t Short url is: ' + host + '/' + doc.shortUrl);
});
};

exports.getUrl = function(req, res) {

	Url.findOne({ shortUrl: req }, function(err, doc) {
		if (err) throw err;
		if(doc === null) 
			res.status(400).json({error: 'That link does not exist'});
		else {
			res.redirect(doc.origUrl);
		}
	});
};

exports.output = function (req, res) {

	Url.find({}, function(err, doc) {
		if (err) throw err;

		/*Url.remove(function(err) {
			if (err) throw err;
		});*/

		res.send(doc);
	});
};

module.exports = exports;