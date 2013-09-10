// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// topNavigation Functions
module.exports = {
    // topNavigationHtml Function
    'topNavigationHtml': function(activeLink) {

        var templatePath        = path.join(__dirname, "../views/topNavigation.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');
        var jadeFn              = jade.compile(template, { filename: templatePath, pretty: true });
        var renderedTemplate    = jadeFn({'activeLink': activeLink});

        return renderedTemplate;

    }
};