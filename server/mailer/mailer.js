const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const router = express.Router();

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASSWORD
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server ready to send email');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;
  const mail = {
    from: name,
    to: 'z.jackson58@gmail.com',
    subject: 'New message from Portfolio Site',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        message: 'Send message failed.'
      });
    } else {
      res.json({
        message: 'Message sent successfully!'
      });
    }
  });
});

module.exports = router;
