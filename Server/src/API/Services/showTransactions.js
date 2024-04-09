const transactionInfos = require("../Helpers/transactionsData");
const transactionsData = transactionInfos.transactions

function GetAll() {
    return transactionsData;
}

module.exports = {
    GetAll
}