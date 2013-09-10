var jade = require('jade');
var path = require('path');
module.exports = {
    'loginBodyHtml': function() {
//        var templatePath = path.join(__dirname, "../views/loginBody.jade");
//        var template = require('fs').readFileSync(templatePath, 'utf8');
//        var jadeFn = jade.compile(template, { filename: templatePath, pretty: true });
//        var renderedTemplate = jadeFn({});
//        return renderedTemplate;

        return require('fs').readFileSync(path.join(__dirname, "../views/loginBody.html"), 'utf8');
    }
};