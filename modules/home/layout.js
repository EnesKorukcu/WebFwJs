var systemLayouts = require('../default/layout.js');
module.exports = function() {
    // Set Every Route's Layout to Default Layout
    var layouts = {
        'GET': {
            '/': systemLayouts.defaultLayout.createSelf()
        }
    };

    layouts['GET']['/'].head.title = 'WebFwJs';

    return layouts;
}();