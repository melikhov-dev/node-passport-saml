const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const hasAuth = req.user !== undefined;
  const name = hasAuth && req.user.nameID;
  res.render('index', {hasAuth, name});
});

module.exports = router;
