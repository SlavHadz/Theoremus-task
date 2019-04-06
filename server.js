const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

const truckRouter = require('./routes/trucks');
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(truckRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});