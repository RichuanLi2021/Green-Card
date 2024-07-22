const nodemailer = require('nodemailer');
const env = require('../config/env');

const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: false, // true for 465, false otw
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD
    }
});

module.exports = transporter;

