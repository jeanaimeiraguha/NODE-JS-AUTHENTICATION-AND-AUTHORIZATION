const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();
const app = express();
// Session Setup
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
// Passport Setup
app.use(passport.initialize());
app.use(passport.session());
// Serialize and Deserialize User
passport.serializeUser((user, done) => {
done(null, user);
});
passport.deserializeUser((user, done) => {

done(null, user);
});
// Google Strategy
passport.use(new GoogleStrategy({
clientID: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
return done(null, profile);
}
));
// Facebook Strategy
passport.use(new FacebookStrategy({
clientID: process.env.FACEBOOK_APP_ID,
clientSecret: process.env.FACEBOOK_APP_SECRET,
callbackURL: '/auth/facebook/callback'
},
(accessToken, refreshToken, profile, done) => {
return done(null, profile);
}
));
123 
app.get('/', (req, res) => {
res.send(`<h1>Welcome</h1><a href="/auth/google">Login with
Google</a><br><a href="/auth/facebook">Login with Facebook</a>`);
});
// Google Authentication Route
app.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] })
);
app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/' }),
(req, res) => {
res.redirect('/profile');
}
);
// Facebook Authentication Route
app.get('/auth/facebook',
passport.authenticate('facebook')
);
app.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/' }),
(req, res) => {
res.redirect('/profile');
}
);
// Profile Route
app.get('/profile', (req, res) => {
res.send(`<h1>Profile</h1><p>${JSON.stringify(req.user, null, 4)}</p>`);
});
// Logout Route
app.get('/logout', (req, res) => {
req.logout(() => {
res.redirect('/');
});
});
// Start Server
app.listen(3000, () => {
console.log('Server started on http://localhost:3000');
});
