const pool = require('../config/database');

const postFeedback = {
    postFeedback: async (req, res, next) => {
        const { name, email, comment, rating, subscribe } = req.body;
        console.log(name, email, comment);
        try {
            await pool.query('INSERT INTO feedback (name, email, comment, overall_rating, subscribe) VALUES (?, ?, ?, ?, ?)',
                [name, email, comment, rating, subscribe]);
            res.send('Feedback submitted successfully');
        } catch (err) {
            next(err);
            throw err;
        }
    }
};

module.exports = postFeedback;
