const express = require('express');
const { getAllTransaction,
    addTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController');

const router = express.Router();

router.post('/addTransaction', addTransaction);
router.post('/editTransaction', editTransaction);
router.post('/deleteTransaction', deleteTransaction);
router.post('/getTransaction', getAllTransaction);

module.exports = router;