const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ikpefanonaighomen@gmail.com',
            pass: 'Nanooooooo7'
        }
    });

    const mailOptions = {
        from: email,
        to: 'ikpefanonaighomen@gmail.com',
        subject: `Portfolio Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Portfolio Message sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
