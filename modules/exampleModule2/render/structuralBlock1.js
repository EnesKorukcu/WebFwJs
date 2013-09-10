// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
// exampleModule1Wrapper Functions
module.exports = {
    // exampleHtmlExport Function
    'structuralBlock1Html': function() {

        var templatePath        = path.join(__dirname, "../views/structural/structuralBlock1Html.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');

        return template;

    }
};