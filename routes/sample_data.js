var express = require('express');

var router = express.Router();

var database = require('D:/5th sem/ipfs_copy/ipfs_upload/database.js');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM sample_data";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'', action:'list', sampleData:data});
		}

	});

});

module.exports = router;