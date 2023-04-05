const pool = require('../config/database');

const postFeedback = async (req, res, next) => {
    const { name, email, comment, rating, subscribe } = req.body;
    try {
        await pool.query('INSERT INTO feedback (name, email, comment, overall_rating, subscribe) VALUES (?, ?, ?, ?, ?)',
            [name, email, comment, rating, subscribe]);
        res.send('Feedback submitted successfully');
    } catch (err) {
        next(err);
        throw err;
    }
};

const getFeedback = async (req, res, next) => {
    try {
        const [rows] = await pool.query('SELECT * FROM feedback');
        res.send(rows);
    } catch (err) {
        next(err);
        throw err;
    }
};

module.exports = {
    postFeedback,
    getFeedback,
};
