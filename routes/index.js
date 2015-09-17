var express = require('express');
var router = express.Router();
var Guest = require('../models/guest');

router.post('/api/guests', function(req, res) {
  var guest = new Guest(req.body);
  guest.save(function(err, guestStored){
    return res.status(201).json(guestStored);
  });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = router;
