// use foo,bar for testing
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: [true, "Please Enter the name"]
    },
    password: {
        type: String,
        required: [true, "Please Enter the password"]
    }
});

module.exports = mongoose.model('Users', User); 