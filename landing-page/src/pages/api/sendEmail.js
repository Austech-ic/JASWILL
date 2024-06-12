// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract form data
      const formData = req.body;

      // Create transporter
      const transporter = nodemailer.createTransport({
        // Provide your SMTP configuration here
        // For example, for Gmail:
        service: 'Gmail',
        auth: {
          user: 'henyorlerjosephine@gmail.com', // Your Gmail email address
          pass: 'Eniola2875#', // Your Gmail password
        },
      });

      // Construct email message
      const message = {
        from: 'your-email@gmail.com', // Sender address
        to: 'henyorlerjosephine@gmail.com', // Receiver address
        subject: 'New Partner Submission', // Subject line
        text: `
          Full Name: ${formData.fullName}
          Address: ${formData.address}
          Type of Partner: ${formData.typeOfPartner}
          Email: ${formData.email}
          Phone: ${formData.phone}

          Date of Registration: ${formData.registrationDate}
        `, // Plain text body
      };

      // Send email
      await transporter.sendMail(message);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
