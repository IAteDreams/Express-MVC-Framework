const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const {config} = require('../settings/config');

class BaseController{
    static res;
    static req;

    index(req,res){
        BaseController.req = req;
        BaseController.res = res;
    }

    //this framework render
    async render(view,obj = {}){
        let profilerRenderHtml ="";
        if(config.enabled_profiler){
            const profilerPath = path.join(__dirname, '..', 'utilities', 'profiler_util', 'profiler.ejs');
            const profilerHtml = fs.readFileSync(profilerPath, 'utf8');
            let profilerData = {
                url: BaseController.req.session.url,
                get: BaseController.req.session.get,
                post: BaseController.req.session.post,
                lastQuery: BaseController.req.session.lastQuery,
                memory: BaseController.req.session.memory,
                exceuteTime: BaseController.req.session.nextExecuteTime
            }
            profilerRenderHtml = ejs.render(profilerHtml,{data: profilerData});
        }
        BaseController.res.render(view, obj, async (err,html)=>{
            let CombineHtml = html +  profilerRenderHtml;
            BaseController.res.send(CombineHtml)
        });
    }
}

module.exports = BaseController;