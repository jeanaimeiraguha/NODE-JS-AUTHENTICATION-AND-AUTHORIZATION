// It's installation is as follows
// npm install jsonwebtoken bcryptjs


// Create a JWT Authentication Middleware:
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = []; // Simulating a user database
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.send('User registered!');
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.username }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.send('Invalid credentials');
    }
});
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (token) {
        jwt.verify(token, 'secretkey', (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
app.get('/dashboard', authenticateJWT, (req, res) => {
    res.send('Welcome to your dashboard!');
});

// . Creating Authentication Middleware

const jwt = require('jsonwebtoken');
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (token) {
        jwt.verify(token, 'secretkey', (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;

            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

// 2. Using the Middleware to Protect Routes:

// Apply the authenticateJWT middleware to routes that should be protected:
app.get('/dashboard', authenticateJWT, (req, res) => {
    res.send('Welcome to the protected dashboard!');
});
app.get('/profile', authenticateJWT, (req, res) => {
    res.json({ user: req.user, message: 'This is your protected profile page.' });
});
// Public routes, like login or registration, do not need this middleware:
app.post('/login', (req, res) => {
    // Login logic and token generation
    const token = jwt.sign({ username: req.body.username }, 'secretkey',
        { expiresIn: '1h' });
    res.json({ token });
});