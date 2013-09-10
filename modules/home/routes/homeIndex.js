// GET "/"
module.exports = function(app, express, utilities, currentModule) {
    app.get('/', function(req, res) {
        if(req.session.loggedIn === undefined || req.session.loggedIn === false) {
            res.redirect('http://'+req.headers.host + '/login');
        }
        else {
            utilities.output(res, currentModule.layout['GET'][  '/']);
        }
    });
};