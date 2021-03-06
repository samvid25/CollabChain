var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('submitter');
});

router.post('/', function(req, res, next) {
  res.render('submitter_connected', {task_title: req.body.task_title, js_function: req.body.js_function});
});

module.exports = router;
