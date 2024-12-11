const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors({
   
}));
app.use(bodyParser.json());
app.use(express.json())

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465, // Use 587 for TLS
    secure: true, // true for 465, false for 587
    auth: {
        user: 'dacedjako@yahoo.com', // Replace with your Yahoo email
        pass: 'heqzzrimskujjqnw',
       
    },
});

// API endpoint to send email
app.post('/send-email', (req, res) => {
    console.log('Received request:', req.body); // Log the request body
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const mailOptions = {
        from: 'dacedjako@yahoo.com',
        to: 'dacedjako@yahoo.com', // Your Yahoo email to receive the message
        subject: ` ${name}`,
        text: `Име: ${name}\nEmail: ${email}\nПорака:\n${message}`,
        // replyTo: email,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email.' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully.' });
    });
});

// Start the server
const PORT = dacedjako.mk;
app.listen(PORT, () => {
    console.log(`Server is running on https://${PORT}`);
});
