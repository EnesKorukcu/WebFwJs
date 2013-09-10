// GET "/login"
var path   = require('path');
module.exports = function(app, express, utilities, currentModule) {
    // Model Definitions
    app.get('/login', function(req, res) {
        utilities.output(res, currentModule.layout['GET']['/login']);
    });
    app.post('/login', function(req, res) {
        if((req.body.username === "testUser") && (req.body.password === "123")) {
            req.session.loggedIn = true;
            res.end('Ok');
        }
        else {
            req.session.loggedIn = false;
            res.end('Not Ok');
        }
    });
    app.get('/logout', function(req, res) {
        req.session.loggedIn = false;
        res.redirect('http://'+req.headers.host);
    });
};