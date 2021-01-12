/**
 * * Import statements
 */ 
const express = require('express');
const bodyParser = require('body-parser');
const props = require('./props');

/**
 * * Server Setup
 */ 
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const ws = require('./events/websocket');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.log(req.body);
    next();
});
app.use('/', require('./routes/rest').router);
ws.registerEvents(io);

http.listen(props.PORT_SERVER, () => {
  console.log(`StonePaperScissor: Backend up at http://localhost:${props.PORT_SERVER}`);
});