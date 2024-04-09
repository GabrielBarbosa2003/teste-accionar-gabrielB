const express = require("express");
const router = express.Router();
const transactionController = require("../Controllers/transactions");

function DefineRoutes() {
    router.get("/api/v1/transactions/getTransactions", async (req, res) => {
        transactionController.index(res);
    });
}

function MapRoutes() {
    DefineRoutes();
    return router;
}

module.exports = {
    MapRoutes
}