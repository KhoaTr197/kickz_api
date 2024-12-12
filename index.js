require('dotenv').config();
const express = require('express');
const router_v2 = require('./src/v2/routes/route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(`/api/${process.env.API_VERSION}`, router_v2);

app.listen(PORT, () => {
  console.log(`API is hosting on http://localhost:${PORT}/api/${process.env.API_VERSION}`); 
})