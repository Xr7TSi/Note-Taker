const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const http = require('http');


const handleRequest = (request, response) => {
    response.end(`It Works!! Path Hit: ${request.url}`);
  };

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`)
});
