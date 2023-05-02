const Express = require('express');
const {config} = require('../settings/config');
const profiler = require('../utilities/profiler_util/profiler')
const Router = Express.Router();
const route = require('../settings/route')
const BaseController = require('./baseController');
const baseController = new BaseController();

//controllers
const controllers = require('../system/Controllers');

//get the res and req to the base controller
Router.use('/', (req, res, next) => {
    baseController.index(req, res);
    next();
});

//profiler
if(config.enabled_profiler){
    Router.use('/', profiler.index)
}

//make all the route
for(let url in route){
    let [controller, method] = route[url].split('/').filter(i => i);
    Router.all(url, controllers[controller][method]);
}

module.exports = Router;