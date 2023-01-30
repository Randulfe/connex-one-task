const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/time', function(req, res, next) {
  const time = Math.floor(Date.now() / 1000);
  res.status(200).send({
    epoch: time,
  });
});

module.exports = router;
