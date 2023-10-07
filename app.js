const express = require('express');
const msgController = require('./functions/controllers/msgController');
const adminController = require('./functions/controllers/adminController');
const bodyParser = require('body-parser');

const port = 8080;
const app = express();
var path = require('path');
const msgRouter = express.Router();
const adminRouter = express.Router();

app.use(express.static('./public'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './views'));

msgRouter
    .route('/whatsapp')
    .get(msgController.getMsg)
    .post(msgController.postMsg);

adminRouter
    .route('/')
    .get(adminController.getData)
    // .post(adminController.postData);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(msgRouter);
app.use(adminRouter);


app.listen(port, () => {
    console.log("Aplication runing into port " + port)
});