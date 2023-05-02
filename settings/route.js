let route = [];

//Make Route
// ex route['/'] = '/controllerFileName/methodName';
route['/search'] = '/sports/viewSport';
route['/players']= '/sports/user_html';
route['/search_players']= '/sports/process_search'



//Export the Router
module.exports = route;