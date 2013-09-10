// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
module.exports = {
    'exampleContentBlock4Html': function() {

        var templatePath        = path.join(__dirname, "../views/content/exampleContentBlock4Html.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');
        var jadeFn              = jade.compile(template, { filename: templatePath, pretty: true });
        var renderedTemplate    = jadeFn({});

        return renderedTemplate;

    }
};