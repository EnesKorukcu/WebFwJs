var systemLayouts = require('../default/layout.js');
module.exports = function() {
    // Set Every Route's Layout to Default Layout
    var layouts = {
        'GET': {
            '/example_module2': systemLayouts.defaultLayout.createSelf()
        }
    };

    layouts['GET']['/example_module2'].head.title = 'Example Module 2 - WebFwJs';

    // Wrapper Structural Block
    layouts['GET']['/example_module2'].middle.generalWrapperBlock = systemLayouts.abstractLayouts.createStructuralBlock();
    var generalWrapperBlock = layouts['GET']['/example_module2'].middle.generalWrapperBlock;

    generalWrapperBlock.trigger.module      = 'exampleModule2';
    generalWrapperBlock.trigger.file        = 'generalWrapperBlock';
    generalWrapperBlock.trigger.function    = 'generalWrapperBlockHtml';

    generalWrapperBlock.headMembers.requiredUILibs.css.push('assets/exampleModule2/stylesheets/exampleModule2.css');
    generalWrapperBlock.headMembers.requiredUILibs.js.push('assets/exampleModule2/javascripts/exampleModule2.js');

    // Structural Block 1
    generalWrapperBlock.includes.structuralBlock1 = systemLayouts.abstractLayouts.createStructuralBlock();
    var structuralBlock1 = generalWrapperBlock.includes.structuralBlock1;

    structuralBlock1.trigger.module      = 'exampleModule2';
    structuralBlock1.trigger.file        = 'structuralBlock1';
    structuralBlock1.trigger.function    = 'structuralBlock1Html';

    // Content Block 1
    structuralBlock1.includes.contentBlock1 = systemLayouts.abstractLayouts.createContentBlock();

    var contentBlock1 = structuralBlock1.includes.contentBlock1;

    contentBlock1.trigger.module      = 'exampleModule2';
    contentBlock1.trigger.file        = 'exampleContentBlock1';
    contentBlock1.trigger.function    = 'exampleContentBlock1Html';

    delete contentBlock1;

    // Content Block 2
    structuralBlock1.includes.contentBlock2 = systemLayouts.abstractLayouts.createContentBlock();

    var contentBlock2 = structuralBlock1.includes.contentBlock2;

    contentBlock2.trigger.module      = 'exampleModule2';
    contentBlock2.trigger.file        = 'exampleContentBlock2';
    contentBlock2.trigger.function    = 'exampleContentBlock2Html';

    contentBlock2.headMembers.requiredUILibs.css.push('assets/exampleModule2/stylesheets/contentBlock2.css');

    delete contentBlock2;

    // Content Block 3
    structuralBlock1.includes.contentBlock3 = systemLayouts.abstractLayouts.createContentBlock();

    var contentBlock3 = structuralBlock1.includes.contentBlock3;

    contentBlock3.trigger.module      = 'exampleModule2';
    contentBlock3.trigger.file        = 'exampleContentBlock3';
    contentBlock3.trigger.function    = 'exampleContentBlock3Html';

    contentBlock3.headMembers.htmlAttributes = {
        'lang': 'en'
    };

    delete contentBlock3;

    delete structuralBlock1;

    // Structural Block 2
    generalWrapperBlock.includes.structuralBlock2 = systemLayouts.abstractLayouts.createStructuralBlock();
    var structuralBlock2 = generalWrapperBlock.includes.structuralBlock2;

    structuralBlock2.trigger.module      = 'exampleModule2';
    structuralBlock2.trigger.file        = 'structuralBlock2';
    structuralBlock2.trigger.function    = 'structuralBlock2Html';

    // Content Block 4
    structuralBlock2.includes.contentBlock4 = systemLayouts.abstractLayouts.createContentBlock();

    var contentBlock4 = structuralBlock2.includes.contentBlock4;

    contentBlock4.trigger.module      = 'exampleModule2';
    contentBlock4.trigger.file        = 'exampleContentBlock4';
    contentBlock4.trigger.function    = 'exampleContentBlock4Html';

    contentBlock4.headMembers.metaTags.push({
        'name': 'description',
        'content': 'awesome framework'
    });

    delete contentBlock4;

    // Content Block 5
    structuralBlock2.includes.contentBlock5 = systemLayouts.abstractLayouts.createContentBlock();

    var contentBlock5 = structuralBlock2.includes.contentBlock5;

    contentBlock5.headMembers.headAttributes = {
        'class': 'headClassName'
    };

    contentBlock5.trigger.module      = 'exampleModule2';
    contentBlock5.trigger.file        = 'exampleContentBlock5';
    contentBlock5.trigger.function    = 'exampleContentBlock5Html';

    delete contentBlock5;

    delete generalWrapperBlock;

    return layouts;
}();