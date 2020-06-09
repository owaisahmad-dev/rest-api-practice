const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotionRouter');
const leaderRouter = require('./routes/leadersRouter');

const hostname = 'localhost';
const port = '3000';

const app = express();
app.use(bodyparser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter)
app.use('/leaders', leaderRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log('Server listening on https://' + hostname+":"+port);
})