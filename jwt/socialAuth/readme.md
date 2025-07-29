 ** ``` Install necessary packages
npm install express passport passport-google-oauth20 passport-facebook

express-session dotenv
Express: Web framework for Node.js.
Passport: Authentication middleware for Node.js.
passport-google-oauth20: Google OAuth 2.0 authentication strategy for
Passport.
passport-facebook: Facebook OAuth 2.0 authentication strategy for Passport.
express session: Middleware to manage user sessions.
dotenv: To load environment variables from a .env file.
2. Configure OAuth Apps
You need to create OAuth applications for Google and Facebook.
Google OAuth Setup
Go to Google Developer Console.
Create a new project.
Navigate to "OAuth consent screen" and configure it.
Go to "Credentials" and create OAuth 2.0 Client IDs.
Set the authorized redirect URIs (e.g.,
http://localhost:3000/auth/google/callback).
Note the Client ID and Client Secret.
Facebook OAuth Setup
Go to Facebook Developers.

````
###