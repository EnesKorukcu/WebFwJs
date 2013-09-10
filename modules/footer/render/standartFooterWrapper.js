// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// settingsLink Functions
module.exports = {
    // settingsLinkHtml Function
    'standartFooterWrapperHtml': function() {

        var templatePath        = path.join(__dirname, "../views/standartFooterWrapper.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');

        return template;

    }
};