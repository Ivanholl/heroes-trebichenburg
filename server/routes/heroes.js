var express = require('express');
const { check, validationResult} = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = express.Router();


var Hero = require('../mongodb/heroSchema');
const auth = require('../mongodb/auth')

router.post("/createHero", auth, [
        check("name", "Hero is not Valid type of Hero").not().isEmpty(),
        check("race", "Hero is not Valid type of Hero").not().isEmpty(),
        check("hpMin", "Hero is not Valid type of Hero").not().isEmpty(),
        check("hpMax", "Hero is not Valid type of Hero").not().isEmpty(),
        check("mpMin", "Hero is not Valid type of Hero").not().isEmpty(),
        check("mpMax", "Hero is not Valid type of Hero").not().isEmpty(),
        check("dmMin", "Hero is not Valid type of Hero").not().isEmpty(),
        check("dmMax", "Hero is not Valid type of Hero").not().isEmpty(),
        check("df", "Hero is not Valid type of Hero").not().isEmpty(),
    ] , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }        
        
        const { name, race, hpMin, hpMax, mpMin, mpMax, dmMin, dmMax, df } = req.body;

        try {   
            let hero = await Hero.findOne({name});
            if (hero) {
                return res.status(200).json({
                    error: "Name taken"
                });
            }
            
            hero = new Hero({name, race, hpMin, hpMax, mpMin, mpMax, dmMin, dmMax, df });
            console.log(hero)
        
            await hero.save();
            
            res.status(200).json({
                hero: hero
            });

        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
)

module.exports = router;