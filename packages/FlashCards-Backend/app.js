require("dotenv").config({ path: '../.env' });
const server = require("./src/Server");

const Server = new server();

Server.listen();
