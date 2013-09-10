var fs = require('fs');
var path = require('path');
module.exports = function(app, express, utilities) {

    // Modules Array Init
    var modules = [];

    // Start Reading Current Directory Contents
    var moduleContents = fs.readdirSync(__dirname);
    var modulePath, moduleName, moduleFile;
    for(var index in moduleContents) {
        // Module Path
        modulePath = __dirname + '/' + moduleContents[index];
        // Check If Content Is Directory
        if(fs.lstatSync(modulePath).isDirectory()) {
            moduleName = moduleContents[index];
            moduleFile = modulePath + '/' + 'index.js';
            // Check If Content Directory Has Index.js File
            if(fs.existsSync(moduleFile)) {
                modules.push({'moduleName': moduleName, 'moduleFile': moduleFile});
            }
        }
    }

    // Garbage Collector
    delete moduleContents, modulePath, moduleName, moduleFile;

    // Check If Module Constructors Are Function
    var moduleConstructor;
    for(var index in modules) {
        moduleConstructor = require(modules[index].moduleFile);
        if(typeof moduleConstructor === 'function') {
            modules[index].moduleConstructor = moduleConstructor;
        }
        else {
            modules.remove(index);
        }
    }

    // Garbage Collector
    delete moduleConstructor;

    for(var index in modules) {

        var currentModule = modules[index];

        // Get Module Settings From Constructor
        var moduleSettings = currentModule.moduleConstructor();
        for(var settingsIndex in moduleSettings) {
            currentModule[settingsIndex] = moduleSettings[settingsIndex];
        }
        // Garbage Collector
        delete moduleSettings;

        // Set Module Assets Path
        app.use('/assets/' + currentModule.moduleName, express.static(__dirname + '/' + currentModule.moduleName + '/assets'));

        if(moduleSettings.moduleType === "active") {

            // Module Routes
            currentModule.routesPath = __dirname + '/' + currentModule.moduleName + '/routes';
            currentModule['routes'] = [];
            var moduleRoutesFolder = fs.readdirSync(currentModule.routesPath);
            var routeFilePath;
            for(var moduleRoutesIndex in moduleRoutesFolder) {
                routeFilePath = currentModule.routesPath + '/' + moduleRoutesFolder[moduleRoutesIndex];
                if(fs.lstatSync(routeFilePath).isFile()) {
                    if(path.extname(routeFilePath) === '.js') {
                        currentModule['routes'].push({'routeFileName': path.basename(routeFilePath), 'routeFilePath': routeFilePath});
                    }
                }
            }
            // Garbage Collector
            delete moduleRoutesFolder;
            delete routeFilePath;

            var routeFileContent;

            for(var moduleRoutesIndex in currentModule['routes']) {
                routeFileContent = require(currentModule['routes'][moduleRoutesIndex].routeFilePath);
                if(typeof routeFileContent === 'function') {
                    currentModule['routes'][moduleRoutesIndex].routeFileConstructor = routeFileContent;
                    // Register Route
                    currentModule['routes'][moduleRoutesIndex].routeFileConstructor(app, express, utilities, currentModule);
                }
            }
            // Garbage Collector
            delete routeFileContent;

        }
    }
    return modules;
};