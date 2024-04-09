const express = require("express");
const transactionsRoutes = require("./API/Routes/transactions");
const server = express();
const local = "[ SERVER ]";
const port = 5000;

function DefineMiddlewares() {
    server.use(express.json());
    server.use(transactionsRoutes.MapRoutes());
}

function OpenServer() {
    server.listen(port, () => {
        console.log(`${local} Runing on port ${port}`);
    });
}

function StartWebServer() {
    DefineMiddlewares();
    OpenServer();
}

StartWebServer();