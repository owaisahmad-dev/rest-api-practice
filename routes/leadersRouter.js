const express = require('express');
const bodyparser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyparser.json());


leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Fetching all the leaders');
})
.put((req, res) => {
    res.end(req.method + " is not supported for this route");
})
.post((req, res) => {
    res.end(req.method + " is not supported for this route");
})
.delete((req, res) => {
    res.end('Deleted all the leaders');
});


leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    var leaderId = req.params.leaderId;
    res.end('Fetching all the details for Leader ID:' + leaderId);
})
.put((req, res) => {
    var leaderId = req.params.leaderId;
    res.end('Updating details for Leader ID:' + leaderId);
})
.post((req, res) => {
    var leaderId = req.params.leaderId;
    res.end('Added details for new Leader ID:' + leaderId);
})
.delete((req, res) => {
    var leaderId = req.params.leaderId;
    res.end('Deleted details for Leader ID:' + leaderId);
});

module.exports = leaderRouter;