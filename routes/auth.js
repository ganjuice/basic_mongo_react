const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

// get for the login
// a way to display the user

//registering
router.post("/register", function(req, res){
	console.log("hello");
	Account.register(new Account({
<<<<<<< HEAD
		username: req.body.username,
=======
		username: req.body.username
>>>>>>> b12cd8332c8d237f04181392c4ea973b1c745578
	}),
	req.body.password,
	function(err, account){
		if(err){
			// that didn't work
			return res.json(false);
		}

		passport.authenticate('local')(req, res, function(){
			res.json(true);
		})
	})
});
// login
router.post("/login", passport.authenticate('local'), function(req, res){
	res.json(true)
});

router.get('/logout', function(req, res){
	req.logout();
	res.json(true)
});

module.exports = router;