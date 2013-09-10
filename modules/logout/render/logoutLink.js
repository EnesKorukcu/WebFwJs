// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// settingsLink Functions
module.exports = {
    // settingsLinkHtml Function
    'logoutLinkHtml': function() {

        var templatePath        = path.join(__dirname, "../views/logoutLink.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');
        var jadeFn              = jade.compile(template, { filename: templatePath, pretty: true });
        var renderedTemplate    = jadeFn({});

        return renderedTemplate;

    }
};