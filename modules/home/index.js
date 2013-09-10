// home Module definitions
var layout = require('./layout.js');
module.exports = function() {
    var moduleSettings = {
        'moduleType': 'active',
        'modulePath': __dirname,
        'viewPath': __dirname + '/views',
        'layout': layout
    };
    return moduleSettings;
};