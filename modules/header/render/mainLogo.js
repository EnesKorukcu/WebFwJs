// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// loginLogo Functions
module.exports = {
    // logoHtml Function
    'logoHtml': function() {

        var templatePath        = path.join(__dirname, "../views/mainLogo.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');
        var jadeFn              = jade.compile(template, { filename: templatePath, pretty: true });
        var renderedTemplate    = jadeFn({});

        return renderedTemplate;

    }
};