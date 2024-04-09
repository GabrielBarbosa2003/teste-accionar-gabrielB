const local = "[ TRANSACTIONS-CONTROLLER ]";
const responseHandler = require("../Helpers/routesHelper");
const showTransactions = require("../Services/showTransactions");

function index(res) {
    try {
        return responseHandler.ReturnResponse(
            "Sucess",
            200,
            showTransactions.GetAll(),
            res
        );
    } catch (error) {
        console.error(`${local} Failed trying to show all transactions: `, error);
        responseHandler.ReturnResponse(
            "Error",
            500,
            null,
            res
        );
    }
}

module.exports = {
    index
}