var express = require('express');
var router = express.Router();

/* GET Svc Metadata */
router.get('/:key', function(req, res, next) {
  res.render('repo_svcDetail', { title: 'Details' });
});

module.exports = router;
