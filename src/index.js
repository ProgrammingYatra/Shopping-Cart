require("dotenv").config()
const express = require('express');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose')
const multer = require('multer');;
const app = express();

const upload = multer();
app.use(upload.any());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.URL, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

app.listen(process.env.PORT, function () {
    console.log('Express app running on port ' + (process.env.PORT))
});