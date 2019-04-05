const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const truckRouter = require('./routes/trucks');
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(truckRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});