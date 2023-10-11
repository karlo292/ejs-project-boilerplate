const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 5000;
const cookieParser = require('cookie-parser');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('index');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});