// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// loginHeaderWrapper Functions
module.exports = {
    // loginHeaderWrapperHtml Function
    'loginHeaderWrapperHtml': function() {

        var templatePath        = path.join(__dirname, "../views/loginHeaderWrapper.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');

        return template;

    }
};