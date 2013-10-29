

exports.encode = function(req, res){

	var vals = 'abcdefghijklmnopqrstuvwxyz';

	var map = [];

	for (i=0;i<vals.length;i++) {
		var x = vals.charAt(i);
		var y = vals.charAt((i+13) % 26);

		map[x] = y;
		map[x.toUpperCase()] = y.toUpperCase();
	}

	var value = req.body;
	console.log(value);
	value = value.value;
	if(value != undefined) {
		var temp = value.split("");
		for (var i=0;i<temp.length;i++) {
			if ((temp[i] >= 'a' && temp[i] <= 'z') || (temp[i] >= 'A' && temp[i] <= 'Z')) {
				temp[i] = map[temp[i]];
			} 
		}
		var results = temp.join("");	

  		res.render('index', { title: 'Encode', results: results });
	} else {
		res.render('index', { title: 'Encode', results: "" });
	}

};
