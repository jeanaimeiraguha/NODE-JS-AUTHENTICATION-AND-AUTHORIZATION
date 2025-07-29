// import passport from 'passport'
// const LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(
// function(username, password, done) {
// // Here, you would check the username and password against your database
// if (username === 'admin' && password === 'password') {
// return done(null, { id: 1, username: 'admin' });
// } else {
// return done(null, false, { message: 'Incorrect credentials.' });
// }
// }
// ));
// // ));
// passport.serializeUser(function(user, done) {
// done(null, user.id);
// });
// passport.deserializeUser(function(id, done) {
// // Retrieve user information from the database
// done(null, { id: 1, username: 'admin' });
// });


//  Real App



const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.post('/login', passport.authenticate('local', {
successRedirect: '/dashboard',
failureRedirect: '/login',
failureFlash: true
}));
app.get('/dashboard', (req, res) => {
if (req.isAuthenticated()) {
res.send('Welcome to your dashboard!');
} else {
res.redirect('/login');
}
});