const path = require('path');
const Model = require('../../system/baseModel');

class Profiler{

    async index(req,res,next){
        const start = process.hrtime();
        req.session.url = req.originalUrl;
        req.session.get = JSON.stringify(req.query);
        req.session.post = JSON.stringify(req.body);
        req.session.lastQuery = Model.lastQuery;
        req.session.memory = process.memoryUsage().heapUsed/1000;
        const nextWrapper = () => {
            const end = process.hrtime(start);
            const time = (end[0] * 1000) + (end[1] / 1000000);
            req.session.nextExecuteTime = time;
            next();
        };
        
        nextWrapper();
    }
}

module.exports = new Profiler;