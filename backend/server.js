const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const cors = require('cors');


const server = express();
server.use(cors());
server.options('*', cors());

const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// 👇 Serve static assets (images, etc.) from "backend/data/assets"
server.use('/assets', express.static(path.join(__dirname, 'assets')));

// 👇 JSON Server routes
server.use('/api', router);

// Start the server
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
