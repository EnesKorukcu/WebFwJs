module.exports = {
    'activeEnvironment': 'development',
    'development': function(app, express, process, utilities) {
        var settings = {
            'port': 8080,
            'logging' : {
                'requestLogFile': 'dev_requestLog.txt',
                'responseLogFile': 'dev_responseLog.txt',
            },
            'global_asset_path': 'assets'
        };

        app.set('env', this.activeEnvironment);
        process.env.PORT = settings.port;
        app.set('port', process.env.PORT);
        app.use(express.errorHandler());
        app.use('/assets', express.static(settings.global_asset_path));

        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        app.use(express.bodyParser());
        app.use(app.router);


        app.all('*', function(req, res, next) {
            utilities.logRequestsToFile(req, settings.logging.requestLogFile)
            next();
        });

        return settings;
    },
    'production': function(app, express, process, utilities) {
        var settings = {
            'port': 80,
            'logging' : {
                'requestLogFile': 'prod_requestLog.txt',
                'responseLogFile': 'prod_responseLog.txt',
            },
            'global_asset_path': 'assets'
        };

        app.set('env', this.activeEnvironment);
        process.env.PORT = settings.port;
        app.set('port', process.env.PORT);
        app.use('/assets', express.static(settings.global_asset_path));

        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        app.use(express.bodyParser());
        app.use(app.router);

        app.all('*', function(req, res, next) {
            utilities.logRequestsToFile(req, settings.logging.requestLogFile);
            next();
        });

        return settings;
    }
};