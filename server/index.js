const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const sendMail = require('./mailer/mailer');

const app = express();

const buildPath = path.join(__dirname, '../client', 'build');
const publicPath = path.join(__dirname, '../client', 'public');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', sendMail);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(buildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  app.use(express.static(publicPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
