const express = require('express');  // Web framework for Node.js
const nodemailer = require('nodemailer');  // To send emails
const bodyParser = require('body-parser');  // To parse incoming request bodies
const cors = require('cors');  // To handle Cross-Origin Resource Sharing (CORS) issues

const app = express();

const PORT = process.env.PORT || 3000; // Port on which the server will run 

app.use(cors());  // Enable CORS for cross-origin requests
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL encoded data 
app.use(bodyParser.json());  // Parse JSON data

app.post('/send', (req, res) => { // Define the POST route to handle the '/send' endpoint
    
    const { name, email, message } = req.body;  // Extract the name, email, and message from the form submission

 
    const transporter = nodemailer.createTransport({ // Create a nodemailer transporter object for sending emails
        service: 'gmail',  
        auth: {
            user: 'ikpefanonaighomen@gmail.com',  
            pass: 'Nanooooooo7'  
        }
    });

   
    const mailOptions = {
        from: email,  // The sender's email address from the form input
        to: 'ikpefanonaighomen@gmail.com',  // The recipient's email address 
        subject: `Portfolio Message from ${name}`,  // Email subject including the sender's name
        text: message  // The message content from the form input
    };

   
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           
            return res.status(500).send(error.toString()); // If there's an error sending the email, send a 500 response with the error message
        }
        
        res.status(200).send('Portfolio Message sent: ' + info.response); // If the email is sent successfully, send a 200 response with the success message
    });
});


app.listen(PORT, () => { // Start the server and listen on the defined port
    
    console.log(`Server is running on port ${PORT}`); // Log a message to indicate the server is running and listening for requests
});
