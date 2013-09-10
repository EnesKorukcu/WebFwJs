// GET "/example_module1"
module.exports = function(app, express, utilities, currentModule) {
    app.get('/example_module1', function(req, res) {
        utilities.output(res, currentModule.layout['GET']['/example_module1']);
    });
};