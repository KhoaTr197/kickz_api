require('dotenv').config({ path: 'config/dev.env' });
const express = require('express');
const path = require('path'); 
const router_v2 = require('./src/v2/routes');

const { PORT = 8888 } = process.env;

const app = express();

setupApp();

async function setupApp() {
  //set express to read req.body
  app.use(express.json());

  //set ejs as view engine
  app.set('view engine', 'ejs');

  //set the views directory
  app.set('views', path.join(__dirname, `src/${process.env.API_VERSION}/views`));

  //serve static files
  app.use('/public', express.static('public'));
  
  //routes
  app.use(`/`, router_v2);

  app.get('*', (req, res) => {
    res.status(404).send();
  });
  
  app.listen(PORT, () => {
    console.log(`[MASTER] API is hosting on http://localhost:${PORT}`); 
  })
}