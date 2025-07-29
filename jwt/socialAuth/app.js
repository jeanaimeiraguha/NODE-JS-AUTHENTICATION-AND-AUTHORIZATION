// Install Passport.js Social Auth Modules:
// npm install passport-google-oauth20

// In your passport.js configuration file:
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
clientID: 'YOUR_GOOGLE_CLIENT_ID',
clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
callbackURL: "/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
// Check if the user exists in your database and return user data
return done(null, profile);
}));

// 2. Set Up Routes for Google Authentication:

app.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] })
);
app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/login' }),
(req, res) => {
res.redirect('/dashboard');
})