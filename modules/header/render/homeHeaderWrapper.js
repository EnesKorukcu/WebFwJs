// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// loginHeaderWrapper Functions
module.exports = {
    // loginHeaderWrapperHtml Function
    'homeHeaderWrapperHtml': function() {

        var templatePath    = path.join(__dirname, "../views/homeHeaderWrapper.jade");
        var template        = fs.readFileSync(templatePath, 'utf8');

        return template;

    }
};