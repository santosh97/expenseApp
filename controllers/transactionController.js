const transactionModel = require('../models/transactionModel')
const moment = require('moment')
const getAllTransaction = async (req, res) => {
    try {
        const { frequency, selectedDate, type } = req.body
        const query = {};
        if (frequency !== "custom") query.date = { $gt: moment().subtract(Number(frequency), "d").toDate() }
        else query.date = { $gte: selectedDate[0], $lte: selectedDate[1] }

        if (type !== 'All') query.type = type

        query.userid = req.body.userid
        const transaction = await transactionModel.find(query);

        res.status(200).json(transaction);

    } catch (error) {
        res.status(500).json(error)

    }
}
const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save()
        // res.status(201).json({ success: true, newTransaction })
        res.status(201).json("Transaction Created")

    } catch (error) {
        res.status(500).json(error)

    }

}
const editTransaction = async (req, res) => {
    try {
        console.log(req.body.transactionId, req.body.payload);
        const updateTransaction = await transactionModel.findOneAndUpdate({ _id: req.body.transactionId }, req.body.payload);
        // res.status(201).json({ success: true, newTransaction })
        res.status(200).json("Updated Transaction")

    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }

}
const deleteTransaction = async (req, res) => {
    try {
        await transactionModel.findOneAndDelete({ _id: req.body.transacationId });
        res.status(200).send("Transaction Deleted!");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
module.exports = {
    getAllTransaction,
    addTransaction,
    editTransaction,
    deleteTransaction
}