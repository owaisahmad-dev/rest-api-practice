const express = require('express');
const bodyparser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyparser.json());

dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    var dishId = req.params.dishId;
    res.end('Fetching all the details for Dish ID:' + dishId);
})
.put((req, res) => {
    var dishId = req.params.dishId;
    res.end('Updating details for Dish ID:' + dishId);
})
.post((req, res) => {
    var dishId = req.params.dishId;
    res.end('Added details for new Dish ID:' + dishId);
})
.delete((req, res) => {
    var dishId = req.params.dishId;
    res.end('Deleted details for Dish ID:' + dishId);
})

module.exports = dishRouter;