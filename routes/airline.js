

exports.index = function(req, res){

	res.render('airport', { searchItems: [] });
};



exports.index = function(req, response){


request = require('request-json');
var client = request.newClient('http://www.priceline.com/svcs/ac/index/hotels/');

	var value = req.body;
	console.log(value);
	value = value.value;
	if(value != undefined) {

client.get(value + '/0/10/0/0', function(err, res, body) {
		response.render('airport', { searchItems: body.searchItems , results: value});

});
	} else {
				response.render('airport', { searchItems: [], results: "" });

	}



};
