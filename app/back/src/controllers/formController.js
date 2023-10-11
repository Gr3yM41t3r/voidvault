const { pool } = require('../config/db');

exports.submitForm = async (req, res) => {
    // Check if user has a valid session
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ message: "Unauthorized. Please log in." });
    }

    // Get the form data from the request body
    const { cpu, ram, storage, gpu, image, username, password } = req.body;

    try {
        const query = `
            INSERT INTO user_configs(cpu, ram, storage, gpu, image, username, password)
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING id;
        `;

        const values = [cpu, ram, storage, gpu, image, username, password];

        const result = await pool.query(query, values);

        res.status(200).json({ message: "Form data successfully inserted.", id: result.rows[0].id });
    } catch (error) {
        console.error('Error inserting form data:', error);
        res.status(500).json({ message: "Internal server error." });
    }
};
