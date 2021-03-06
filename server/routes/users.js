var express = require('express');
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

var User = require('../mongodb/userSchema');
const auth = require('../mongodb/auth')

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

router.post("/signup",
    [
        check("username", "Please Enter a Valid Username").not().isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({min: 6})
    ]
    , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        user = new User({username, email, password});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, "randomString", { expiresIn: 10000 }, (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
});

router.post("/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({min: 6})
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if (!user)
            return res.status(400).json({
                message: "User Not Exist"
            });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({
                message: "Incorrect Password !"
            });

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, "secret",{ expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            console.log(token);
            res.status(200).json({
                token
            });
        });
    } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }
);

router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        heroId: user.heroId
    });
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

router.put("/edit", auth, async (req, res) => {
    // console.log(req.body)
    
    try {
        // let user = await User.findOne({ _id: req.body._id });
        
        // let update = { user, ...req.body };
        // console.log(update);
        // await user.save();
        // await User.findByIdAndUpdate(user._id, user, (err, result) => {
            console.log({...req.body});
        await User.findOneAndUpdate({ _id: req.body._id }, {...req.body}, {new: true}, (err, result) => {
            if(err) res.send({ message: err })  
            // console.log(result)

            res.json(result);
        } )

    } catch(e) {
        res.send({ message: "Error in Fetching user" });
    }
    // User.updateOne({ _id: doc._id }, { $set: { name: 'foo' } })
})



module.exports = router;


// var signupCheck =
