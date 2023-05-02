// setting of the project
const config = {
  //port config
  PORT: 8080,
  //default path config
  // defaultPath: "C:/Users/name/Documents/files/framework/sports",
  //session config
  SESSION: {
    secret: 'catLord',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  },
  //MySql config
  MySql:{
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sports'
  },
  //profiler 
  enabled_profiler: false
}

//exports 
module.exports = {
    config
};