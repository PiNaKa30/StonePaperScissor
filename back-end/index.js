/**
 * * Import statements
 */ 
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const props = require('./props');

/**
 * * Server Setup
 */ 
const app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.log(req.body);
    next();
});
app.use('/', require('./routes/rest').router);

const rClient = redis.createClient(props.PORT_REDIS);
rClient.on('error', (err) => {
    console.log("Error: Redis Connection Failed !");
    console.log(err);
});

app.listen(props.PORT_SERVER, () => {
  console.log(`StonePaperScissor: Backend up at http://localhost:${props.PORT_SERVER}`);
});