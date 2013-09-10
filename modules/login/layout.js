var systemLayouts = require('../default/layout.js');
module.exports = function() {

    // Set Every Route's Layout to Default Layout
    var layouts = {
        'GET': {
            '/login': systemLayouts.defaultLayout.createSelf()
        }
    };

    // Set GET/login Title
    layouts['GET']['/login'].head.title = "Login - WebFwJs";


    // Required Css Libraries In Head Part
    var requiredCssLibraries = layouts['GET']['/login'].head.headMembers.requiredUILibs.css;
    requiredCssLibraries.push('assets/login/stylesheets/loginMain.css');
    delete requiredCssLibraries;

    // Required Javascript Libraries Before Body Close Tag
    var requiredJsLibraries = layouts['GET']['/login'].beforeBodyClose.js;
    requiredJsLibraries.push('assets/login/javascripts/loginApp.js');
    delete requiredJsLibraries;

    // Set GET/login Route Top Layout
    // Resetting Default headerBlock
    // Create New Structural Block To Hold All Header Elements
    layouts['GET']['/login'].top.headerBlock = systemLayouts.abstractLayouts.createStructuralBlock();

    // Create A Pointer For Better Reading
    var headerBlock = layouts['GET']['/login'].top.headerBlock;

    // Structural Block Trigger Settings // Creates Html That Includes All Header
    headerBlock.trigger.module   = 'header';
    headerBlock.trigger.file     = 'loginHeaderWrapper';
    headerBlock.trigger.function = 'loginHeaderWrapperHtml';

    // Create New Structural Block To Hold All Header Elements
    headerBlock.includes.logoBlock = systemLayouts.abstractLayouts.createContentBlock();

    // Content Block Trigger Settings // Creates Html That Includes Logo
    headerBlock.includes.logoBlock.trigger.module     = 'header';
    headerBlock.includes.logoBlock.trigger.file       = 'loginLogo';
    headerBlock.includes.logoBlock.trigger.function   = 'logoHtml';

    // Set GET/login Route Left Layout
    layouts['GET']['/login'].left = {};

    // Set GET/login Route Middle Layout
    // Create New Structural Block To Hold All Login Body Elements
    layouts['GET']['/login'].middle.loginWrapperBlock = systemLayouts.abstractLayouts.createStructuralBlock();
    var loginWrapperBlock = layouts['GET']['/login'].middle.loginWrapperBlock;

    // Structural Block Trigger Settings // Creates Html That Includes Login Body Elements
    loginWrapperBlock.trigger.module   = 'login';
    loginWrapperBlock.trigger.file     = 'loginWrapper';
    loginWrapperBlock.trigger.function = 'loginWrapperHtml';

    // Create New Content Block To Hold Login Form & Buttons
    loginWrapperBlock.includes.loginBodyBlock = systemLayouts.abstractLayouts.createContentBlock();

    // Content Block Trigger Settings // Creates Html That Includes Login Form & Buttons
    loginWrapperBlock.includes.loginBodyBlock.trigger.module     = 'login';
    loginWrapperBlock.includes.loginBodyBlock.trigger.file       = 'loginBody';
    loginWrapperBlock.includes.loginBodyBlock.trigger.function   = 'loginBodyHtml';

    delete loginWrapperBlock;

    // Set GET/login Route Right Layout
    layouts['GET']['/login'].right = {};

    // Set GET/login Route Bottom Layout
    // Resetting Default footerBlock
    // Create New Structural Block To Hold All Footer Elements
    layouts['GET']['/login'].bottom.footerBlock = systemLayouts.abstractLayouts.createStructuralBlock();
    var footerBlock = layouts['GET']['/login'].bottom.footerBlock;

    // Structural Block Trigger Settings // Creates Html That Includes All Footer Elements
    footerBlock.trigger.module    = 'footer';
    footerBlock.trigger.file      = 'loginFooterWrapper';
    footerBlock.trigger.function  = 'loginFooterWrapperHtml';

    // Create New Content Block To Hold Footer Content
    footerBlock.includes.footerBodyBlock = systemLayouts.abstractLayouts.createContentBlock();

    // Structural Block Trigger Settings // Creates Html That Includes Footer Content
    footerBlock.includes.footerBodyBlock.trigger.module      = 'footer';
    footerBlock.includes.footerBodyBlock.trigger.file        = 'loginFooterBody';
    footerBlock.includes.footerBodyBlock.trigger.function    = 'loginFooterBodyHtml';

    delete footerBlock;

    return layouts;
}();