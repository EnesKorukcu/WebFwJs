var jade = require('jade');
var path = require('path');
module.exports = {
    'loginFooterWrapperHtml': function() {

        var templatePath = path.join(__dirname, "../views/loginFooterWrapper.jade");
        var template = require('fs').readFileSync(templatePath, 'utf8');

        return template;

    }
};