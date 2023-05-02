const Express = require('express');
const app = Express();
const bodyParser = require("body-parser");
const path = require('path');
const session = require('express-session');

const {config} = require('./settings/config');
app.use(Express.static(path.join(__dirname,'assets')))

app.use(bodyParser.urlencoded({extended: true}));
app.use(session(config.SESSION))

app.set('views', __dirname + '/MVC/views'); 
app.set('view engine', 'ejs');

app.listen(config.PORT,() => {
    console.log("listening to port "+config.PORT);
})

const Route = require('./system/Router');

app.use(Route);