var express = require('express');
var router = express.Router();
var User = require('../mongodb/userSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {

    User.find({}, function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send(users);
    })
    
});

module.exports = router;
