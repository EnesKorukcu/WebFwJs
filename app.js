// Required Libraries
var configuration = require('./configuration.js')
    , http        = require('http')
    , path        = require('path')
    , express     = require('express')
    , app         = express()
    , utilities   = require('./utilities.js');

// Set Environment to 'development' or 'production'
configuration.activeEnvironment = 'production';
configuration[configuration.activeEnvironment](app, express, process, utilities);

// Init Modules
var modules       = require('./modules/moduleEngine.js')(app, express, utilities);

// Start Application
app.listen(app.get('port'));
utilities.logInternalAction('internal.log', 'Listening on port ' + app.get('port') + "\n");
