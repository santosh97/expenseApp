const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required and Sholud be Unique"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    }
}, { timestamps: true });

module.exports = mongoose.model('users', userModel)