const express = require('express');
const bodyparser = require('body-parser');

const promotionRouter = express.Router();
promotionRouter.use(bodyparser.json());


promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Fetching all the promotions');
})
.put((req, res) => {
    res.end(req.method + " is not supported for this route");
})
.post((req, res) => {
    res.end(req.method + " is not supported for this route");
})
.delete((req, res) => {
    res.end('Deleted all the promotions');
});


promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    var promotionId = req.params.promotionId;
    res.end('Fetching all the details for Promotion ID:' + promotionId);
})
.put((req, res) => {
    var promotionId = req.params.promotionId;
    res.end('Updating details for Promotion ID:' + promotionId);
})
.post((req, res) => {
    var promotionId = req.params.promotionId;
    res.end('Added details for new Promotion ID:' + promotionId);
})
.delete((req, res) => {
    var promotionId = req.params.promotionId;
    res.end('Deleted details for Promotion ID:' + promotionId);
});

module.exports = promotionRouter;