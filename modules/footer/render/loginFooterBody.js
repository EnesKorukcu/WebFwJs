var jade = require('jade');
var path = require('path');
module.exports = {
    'loginFooterBodyHtml': function() {
        var templatePath = path.join(__dirname, "../views/loginFooterBody.jade");
        var template = require('fs').readFileSync(templatePath, 'utf8');
        var jadeFn = jade.compile(template, { filename: templatePath, pretty: true });
        var renderedTemplate = jadeFn({});
        return renderedTemplate;
    }
};