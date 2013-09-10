// Required Libraries
var jade    = require('jade');
var path    = require('path');
var fs      = require('fs');
module.exports = {
    'exampleContentBlock5Html': function() {

        var templatePath        = path.join(__dirname, "../views/content/exampleContentBlock5Html.jade");
        var template            = fs.readFileSync(templatePath, 'utf8');
        var jadeFn              = jade.compile(template, { filename: templatePath, pretty: true });
        var renderedTemplate    = jadeFn({});

        return renderedTemplate;

    }
};