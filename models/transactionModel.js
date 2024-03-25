const mongoose = require('mongoose');

const transaction = mongoose.Schema({

    userid: {
        type: String,
        required: [true, 'userId is required']
    },
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    type: {
        type: String,
        required: [true, 'type is required']
    },
    category: {
        type: String,
        required: [true, 'cat is required']
    },
    reference: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'desc is required']
    },
    date: {
        type: Date,
        required: [true, 'date is required']
    }
}, { timestamps: true })

module.exports = mongoose.model('transaction', transaction)