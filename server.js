const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/test", function(req, res){
	res.send("all good!");
})

app.listen(PORT, function(){
	console.log('Serving on port ${PORT}')
})