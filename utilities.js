// Required Libraries
var layoutEngine = require('./modules/layoutEngine.js');
var jade = require('jade');

module.exports = {
    'output': function(res, layout) {

        var skeletonJade    = layoutEngine.createSkeleton(layout);
        var bodyContent     = layoutEngine.createBody(layout);
        var jadeFn          = jade.compile(skeletonJade, {pretty: true});

        res.send(jadeFn({bodyContent: bodyContent}));

    },
    'logInternalAction': function(fileName, message) {
        var fs = require('fs');
        fs.appendFile(fileName, message, function(err) {
            if(err) {
                console.log('File Write Error:' + err);
            }
        });
    },
    'logRequestsToFile': function(req, fileName) {
        var fs = require('fs');
        var user_id = '';
        if(req.session.user_id != undefined) {
            user_id = req.session.user_id;
        }
        var reqData = {
            'UserID': user_id,
            'RequestAddress': req.protocol + '://' + req.headers.host + req.route.params[0],
            'RequestType': req.route.method,
            'Keys': req.route.keys,
            'Regexp': req.route.regexp,
            '_Params': req.route.params,
            'params': {
                'route-address-params': req.params,
                'route-query-params': req.query,
                'post-params': req.body,
                'files': req.files
            },
            'Headers': {
                'host': req.headers.host,
                'full-path': req.path,
                'connection': req.headers.connection,
                'accept': req.headers.accept,
                'cache-control': req.headers['cache-control'],
                'if-none-match': req.headers['if-none-match'],
                'if-modified-since': req.headers['if-modified-since'],
                'user-agent': req.headers['user-agent'],
                'referer': req.headers.referer,
                'accept-encoding': req.headers['accept-encoding'],
                'accept-language': req.headers['accept-language'],
                'cookie': req.headers.cookie
            },
            'Datetime': new Date(),
            'Req Fresh': req.fresh,
            'Req Stale': req.stale,
            'Req Hxr': req.xhr,
            'Session': req.session
        };
        reqData = JSON.stringify(reqData) + "\n";
        fs.appendFile(fileName, reqData, function(err) {
            if(err) {
                console.log('File Write Error:' + err);
            }
        });
    }
};