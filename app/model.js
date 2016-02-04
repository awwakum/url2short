var shortid = require('shortid');
var mongoose = require('mongoose');
var credentials = require('../credentials');

mongoose.connect('mongodb://'+ credentials.user + ':' + credentials.pass + '@ds033744.mongolab.com:33744/url-shortener');

var urlSchema = new mongoose.Schema ({
	origUrl: {
		type: String,
		set: function(url) {
			if(!url) return url;
			else {
				if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
          url = 'http://' + url;
        }
        return url;
			}
		}
	},
	shortUrl: String
});

urlSchema.methods.shortify = function() {
	this.shortUrl = shortid.generate();
	return this.shortUrl;
};

/*urlSchema.pre('save', function(next) {
	this.urlShort = shortid.generate();
	next();
});*/

module.exports = mongoose.model('Url', urlSchema);