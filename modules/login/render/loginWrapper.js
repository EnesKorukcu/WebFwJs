var jade = require('jade');
var path = require('path');
module.exports = {
    'loginWrapperHtml': function() {

        var templatePath = path.join(__dirname, "../views/loginWrapper.jade");
        var template = require('fs').readFileSync(templatePath, 'utf8');

        return template;
    }
};