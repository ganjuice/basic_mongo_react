const express = require("express");
const path = require("path");

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

const PORT = process.env.PORT || 3001;

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

const Account = require("./models/account");
mongoose.connect('mongodb://localhost/basic_mongo_react');
passport.use(Account.createStrategy());

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());



// Initialize our session
app.use(expressSession({
	secret: "keyboard cat",
	resave: false,
	saveUninitialized: false
}));



if(process.env.NODE_ENV ==="production"){
	app.use(express.static("client/build"));
}

app.use('/api/auth', authRoutes);

app.get("/api/test", function(req, res){
	return res.json("all good!");
})

app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, function(){
	console.log('Serving on port ${PORT}');
})