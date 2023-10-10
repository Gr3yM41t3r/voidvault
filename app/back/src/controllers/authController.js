
const VALID_TOKEN = '123456'; 
const STATIC_SESSION_ID = 'static_session_id_12345'; 
const { pool } = require('../config/db');

exports.verifyToken = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: "Token is required." });
    }

    try {
        const result = await pool.query('SELECT * FROM access_tokens WHERE token = $1', [token]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: "Token is invalid or expired." });
        }

        const tokenData = result.rows[0];
        if (new Date() > new Date(tokenData.expiry_date)) {
            return res.status(401).json({ message: "Token has expired." });
        }

        req.session.userId = "user_id_here";  // Store user ID or any other data you need in the session

        // Setting the session cookie in the client's browser
        res.cookie('session_id_name', req.session.id, {
            maxAge: 24 * 60 * 60 * 1000, // 1 day expiration time in milliseconds
            httpOnly: true, // prevent client-side JS from reading the cookie
            // secure: true, // uncomment this when using HTTPS
        });

        return res.status(200).json({ message: "Token is valid.", session_id: req.session.id });

    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
