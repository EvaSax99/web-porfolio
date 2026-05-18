const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Contact backend running' });
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  const mailTo = process.env.CONTACT_TO || process.env.SMTP_USER || 'you@example.com';
  const subject = `Nuevo contacto desde web: ${name}`;
  const text = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;

  // If SMTP settings are provided, send email. Otherwise log to console.
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: mailTo,
        subject,
        text,
      });

      return res.json({ success: true, sent: true });
    } catch (err) {
      console.error('Error sending email:', err);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  }

  console.log('Contact request (no SMTP configured):', { name, email, message });
  return res.json({ success: true, sent: false });
});

app.listen(PORT, () => {
  console.log(`Contact backend listening on port ${PORT}`);
});
