const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

const User = require("../models/User");

const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.body.decoded.id }).select("-password");
        return res.json({ "message": user, tag: true })
    }
    catch (error) {
        return res.json({ "message": error, "tag": false })
    }
})

router.get("/:id", verifyToken, async (req, res) => {
    try {
        let _id = req.params.id;
        let user = await User.findOne({ _id }).select("-password");
        return res.json({ "message": user, tag: true })
    }
    catch (error) {
        return res.json({ "message": error, "tag": false })
    }
})

router.post("/login", async (req, res) => {

    const obj = req.body;
    const result = await User.findOne({ username: obj.username });
    if (result) {
        bcrypt.compare(req.body.password, result.password, function (err, hashed) {
            if (hashed === true) {
                const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY);
                return res.json({ "message": "Login success", "token": token, "tag": true })
            }
            else {
                return res.json({ "message": "Login failed", "tag": false })
            }
        });
    }
    else {
        return res.json({ "message": "Login failed", "tag": false })
    }

})


router.post("/signup", async (req, res) => {
    try {
        let { username,
            password
        } = req.body;

        const result = await User.findOne({ username });

        if (result) {
            return res.json({ "message": "User already exists", "tag": false })
        }
        else {
            var hash = bcrypt.hashSync(password, 8);
            password = hash;
            const user = new User({
                username,
                password
            })
            user.save(function (error, document) {
                if (error) {
                    console.error(error)
                    return res.json({ "message": "try again", "tag": false })
                }
                //console.log(document);
                return res.json({ "message": "User SignUp Success", tag: true })
            })
        }
    }
    catch (error) {
        return res.json({ "message": error, "tag": false })
    }
})


module.exports = router;