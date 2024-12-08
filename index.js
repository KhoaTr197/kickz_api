require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const router_v2 = require('./src/v2/routes/route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(`/api/${process.env.API_VERSION}/shoes`, router_v2.shoesRouter);
app.use(`/api/${process.env.API_VERSION}/images`, router_v2.imagesRouter);

app.listen(PORT, () => {
  console.log(`API is hosting on http://localhost:${PORT}`); 
})