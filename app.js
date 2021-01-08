const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path')
const sgMail = require('@sendgrid/mail');

const archive_route = require('./archive.js');
const auth_user = require('./auth_user.js');
const email_comm = require('./email_comm.js');
const defaultRouter = require('./default.js');

const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended : true}))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  module.exports = app

  