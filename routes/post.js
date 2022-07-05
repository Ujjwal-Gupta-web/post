// TODO
// GET, POST, GET_BY_ID
const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const verifyToken = require("../middlewares/verifyToken");


router.get("/", verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({});
        if (posts.length > 0) {
            let obj = posts;
            return res.json({ "tag": true, "message": obj });
        }
        return res.json({ "tag": false, "message": "No posts found" });
    }
    catch (error) {
        return res.json({ "tag": false, "message": error })
    }
})


router.get("/:id", verifyToken, async (req, res) => {
    try {
        let _id = req.params.id;
        const post = await Post.findOne({ _id});
        if (post) {
            return res.json({ "tag": true, "message": post });
        }
        return res.json({ "tag": false, "message": "No Such post found" });
    }
    catch (error) {
        return res.json({ "tag": false, "message": error })
    }
})


router.post("/", verifyToken, async (req, res) => {
    try {
        let { title, description } = req.body;

        const post = new Post({
            title, description,
            posted_by: req.body.decoded.id
        });
        post.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            //console.log(document);
            return res.json({ "message": "Post Added", tag: true })
        })
    }
    catch (error) {
        return res.json({ "tag": false, "message": error })
    }
})

module.exports = router;