# Web-development-project
Portfolio website (Home, About, and Contact) that reflects my journey at KSU and showcases my skills.
CODE FUNCTIONALITY:
-Home page = index
-About page = about
Contact page = contact
On website, from index(home page), navigate to the about page by clicking "About" at the top header or the "Learn More" button.
You can also navigate to any of the pages by clicking on any options on the header.
Fill out the form on the contact page, inputting your name, email address, and message.

How the server-side code interacts with the client-side: 
The client-side form collects user data (name, email, message) and sends it to the server, which then processes the data and sends an email using the Nodemailer module.
The user fills out the form on the client-side (contact.html) and submits it.
The client-side JavaScript (form.js) collects the form data and sends it to the server asynchronously via a POST request to the /send endpoint.
The server then receives the data in the request body and uses Nodemailer to send the email to the specified recipient (ikpefanonaighomen@gmail.com).
