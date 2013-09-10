module.exports = function() {

    // - Abstracted Objects For Layouts -
    // There are two types of blocks. Structural and Content blocks.
    // This object contains abstracted objects for both kind of blocks.
    // So every layout object produced from this objects according to it's structural or content layout.

    var abstractLayouts = {
        // Create Structural Block from Its Abstract Object
        'createStructuralBlock': function() {
            return JSON.parse(JSON.stringify(this.structuralBlock));
        },
        // Structural Block Abstract Object
        'structuralBlock': {
            // Block Type
            'type': 'structuralBlock',
            // Block's Constructor Settings
            'trigger': {
                // Block's Constructor Module
                'module': '',
                // Block's Constructor Module File
                'file': '',
                // Block's Constructor Module File Function
                'function': '',
                // Block's Constructor Module File Function Parameters
                'functionParams': {}
            },
            // Head Members That Block's Needed
            'headMembers': {
                // docType Tag's Attributes
                'docTypeAttributes': {},
                // Head Tag's Attributes
                'headAttributes': {},
                // Html Tag's Attributes
                'htmlAttributes': {},
                // Meta Tags In Head
                'metaTags': [],
                // Required Libraries In Head
                'requiredUILibs': {
                    //Required Javascript Libraries
                    'js': [],
                    // Required Css Libraries
                    'css': []
                }
            },
            // Required UI Libraries After Body Start
            'afterBodyStart': {
                //Required Javascript Libraries
                'js': [],
                // Required Css Libraries
                'css': []
            },
            // Required UI Libraries Before Body Close
            'beforeBodyClose': {
                //Required Javascript Libraries
                'js': [],
                // Required Css Libraries
                'css': []
            },
            // Other Structural And Content Blocks That This Structural Block Includes
            'includes': {
                // Structural Blocks Belongs Here
                // Content Blocks Belongs Here
            }
        },
        // Create Content Block from Its Abstract Object
        'createContentBlock': function() {
            return JSON.parse(JSON.stringify(this.contentBlock));
        },
        // Content Block Abstract Object
        'contentBlock': {
            // Block Type
            'type': 'contentBlock',
            // Block's Constructor Settings
            'trigger': {
                // Block's Constructor Module
                'module': '',
                // Block's Constructor Module File
                'file': '',
                // Block's Constructor Module File Function
                'function': '',
                // Block's Constructor Module File Function Parameters
                'functionParams': {}
            },
            // Head Members That Block's Needed
            'headMembers': {
                // docType Tag's Attributes
                'docTypeAttributes': {},
                // Head Tag's Attributes
                'headAttributes': {},
                // Html Tag's Attributes
                'htmlAttributes': {},
                // Meta Tags In Head
                'metaTags': [],
                // Required Libraries In Head
                'requiredUILibs': {
                    //Required Javascript Libraries
                    'js': [],
                    // Required Css Libraries
                    'css': []
                }
            },
            // Required UI Libraries After Body Start
            'afterBodyStart': {
                //Required Javascript Libraries
                'js': [],
                // Required Css Libraries
                'css': []
            },
            // Required UI Libraries Before Body Close
            'beforeBodyClose': {
                //Required Javascript Libraries
                'js': [],
                // Required Css Libraries
                'css': []
            }
        }
    };

    // A Page Layout contains six parent wrappers
    // "head", "top", "left", "middle", "right", "bottom"
    // Head section is an object that contains head members
    // Other sections are arrays that contains layout objects
    var defaultLayout       = {};
    defaultLayout.head      = {};
    defaultLayout.top       = {};
    defaultLayout.left      = {};
    defaultLayout.middle    = {};
    defaultLayout.right     = {};
    defaultLayout.bottom    = {};

    // Default Layout Head
    defaultLayout.head = {
        // It's going to be title of current route when it's inherited from another layout
        'title': 'WebFwJs',
        // Head Section
        'headMembers': {
            // docType Tag's Attributes
            'docTypeAttributes': {},
            // Head Tag's Attributes
            'headAttributes': {},
            // Html Tag's Attributes
            'htmlAttributes': {},
            // Meta Tags In Head
            'metaTags': [
                {
                    'name': 'viewport',
                    'content': 'width=device-width'
                }
            ],
            // Required Libraries In Head
            'requiredUILibs': {
                //Required Javascript Libraries
                'js': [
                    'assets/javascripts/jquery-1.10.2.min.js'
                ],
                // Required Css Libraries
                'css': [
                    "//fonts.googleapis.com/css?family=Open+Sans:400,300,700&subset=latin,latin-ext",
                    "assets/stylesheets/cssreset-min.css",
                    "assets/stylesheets/general.css"
                ]
            }
        }
    };

    // Default Layout > top > headerBlock
    defaultLayout.top.headerBlock = abstractLayouts.createStructuralBlock();
    // Block Trigger Settings
    defaultLayout.top.headerBlock.trigger.module   = 'header';
    defaultLayout.top.headerBlock.trigger.file     = 'homeHeaderWrapper';
    defaultLayout.top.headerBlock.trigger.function = 'homeHeaderWrapperHtml';

    defaultLayout.top.headerBlock.headMembers.requiredUILibs.css.push('assets/header/stylesheets/headerMain.css');
    defaultLayout.top.headerBlock.beforeBodyClose.js.push('assets/header/javascripts/homeHeaderApp.js');

    // Default Layout > top > headerBlock > logoBlock
    defaultLayout.top.headerBlock.includes.logoBlock = abstractLayouts.createContentBlock();
    // Block Trigger Settings
    defaultLayout.top.headerBlock.includes.logoBlock.trigger.module     = 'header';
    defaultLayout.top.headerBlock.includes.logoBlock.trigger.file       = 'mainLogo';
    defaultLayout.top.headerBlock.includes.logoBlock.trigger.function   = 'logoHtml';

    // Default Layout > top > headerBlock > navigationBlock
    defaultLayout.top.headerBlock.includes.navigationBlock = abstractLayouts.createContentBlock();
    // Block Trigger Settings
    defaultLayout.top.headerBlock.includes.navigationBlock.trigger.module     = 'navigation';
    defaultLayout.top.headerBlock.includes.navigationBlock.trigger.file       = 'topNavigation';
    defaultLayout.top.headerBlock.includes.navigationBlock.trigger.function   = 'topNavigationHtml';

    defaultLayout.top.headerBlock.includes.navigationBlock.headMembers.requiredUILibs.css.push('assets/navigation/stylesheets/navigationMain.css');
    defaultLayout.top.headerBlock.includes.navigationBlock.beforeBodyClose.js.push('assets/navigation/javascripts/navigationApp.js');

    // Default Layout > top > headerBlock > logoutBlock
    defaultLayout.top.headerBlock.includes.logoutBlock = abstractLayouts.createContentBlock();
    // Block Constructor
    defaultLayout.top.headerBlock.includes.logoutBlock.trigger.module     = 'logout';
    defaultLayout.top.headerBlock.includes.logoutBlock.trigger.file       = 'logoutLink';
    defaultLayout.top.headerBlock.includes.logoutBlock.trigger.function   = 'logoutLinkHtml';

    defaultLayout.top.headerBlock.includes.logoutBlock.headMembers.requiredUILibs.css.push('assets/logout/stylesheets/logoutMain.css');
    defaultLayout.top.headerBlock.includes.logoutBlock.beforeBodyClose.js.push('assets/logout/javascripts/logoutApp.js');

    // Default Layout > bottom > headerBlock
    defaultLayout.bottom.footerBlock = abstractLayouts.createStructuralBlock();

    defaultLayout.bottom.footerBlock.headMembers.requiredUILibs.css.push('assets/footer/stylesheets/footerMain.css');

    // Block Trigger Settings
    defaultLayout.bottom.footerBlock.trigger.module    = 'footer';
    defaultLayout.bottom.footerBlock.trigger.file      = 'standartFooterWrapper';
    defaultLayout.bottom.footerBlock.trigger.function  = 'standartFooterWrapperHtml';

    // Default Layout > top > headerBlock > logoutBlock
    defaultLayout.bottom.footerBlock.includes.footerBodyBlock = abstractLayouts.createContentBlock();
    // Block Trigger Settings
    defaultLayout.bottom.footerBlock.includes.footerBodyBlock.trigger.module      = 'footer';
    defaultLayout.bottom.footerBlock.includes.footerBodyBlock.trigger.file        = 'standartFooterBody';
    defaultLayout.bottom.footerBlock.includes.footerBodyBlock.trigger.function    = 'standartFooterBodyHtml';

    // Default Layout, Required UI Libraries After Body Start
    defaultLayout.afterBodyStart = {
        //Required Javascript Libraries
        'js': [],
        // Required Css Libraries
        'css': []
    };

    // Default Layout, Required UI Libraries Before Body Close
    defaultLayout.beforeBodyClose = {
        //Required Javascript Libraries
        'js': [
            'assets/javascripts/angular.min.js',
            'assets/javascripts/underscore-min.js'
        ],
        // Required Css Libraries
        'css': []
    };

    defaultLayout.createSelf = function() {
        return JSON.parse(JSON.stringify(defaultLayout));
    };

    return {
        'abstractLayouts': abstractLayouts,
        'defaultLayout': defaultLayout
    };
}();