const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posted_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    comments: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User"
            },
            comment: {
                type: "String",
                required: true
            }
        }
    ],

});

module.exports = mongoose.model('Posts', Post); 