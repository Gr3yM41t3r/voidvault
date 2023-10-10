// app.js or server.js

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { sessionStore } = require('./src/config/db');
const { verifyToken } = require('./src/controllers/authController');
const cors = require('cors');



const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true  // This is important.
  };

app.use(cors(corsOptions));
app.use(bodyParser.json()); // This middleware is to parse the JSON payload of requests


app.use(session({
    store: sessionStore,
    secret: 'your_secret_key',  // Change this to a long random string
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        // secure: true  // Use this when deploying in HTTPS environments
    }
}));


app.get('/check-session', (req, res) => {
    if (req.session && req.session.userId) {
        res.json({ authenticated: true });
    } else {
        res.json({ authenticated: false });
    }
});




app.post('/verify-token', verifyToken); // Endpoint to verify token

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
