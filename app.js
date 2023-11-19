const express = require('express');
const msgController = require('./controllers/msgController');
const bodyParser = require('body-parser');

const port = 8080;
const app = express();
const msgRouter = express.Router();

msgRouter
    .route('/whatsapp')
    .get(msgController.getMsg)
    .post(msgController.postMsg);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(msgRouter);

app.listen(port, () => {
    console.log("Aplication runing into port " + port)
});