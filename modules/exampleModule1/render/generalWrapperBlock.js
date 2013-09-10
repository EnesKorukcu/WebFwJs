// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// exampleModule1Wrapper Functions
module.exports = {
    // exampleHtmlExport Function
    'generalWrapperBlockHtml': function() {

        var templatePath        = path.join(__dirname, "../views/structural/generalWrapperBlockHtml.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');

        return template;

    }
};