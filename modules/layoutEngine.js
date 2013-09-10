var jade = require('jade');
module.exports = {
    'structuralBlocks': [
        'top',
        'left',
        'middle',
        'right',
        'bottom'
    ],
    'docTypeAttributeHarvester': function(docTypeAttributeObject) {
        var docTypeTag = '';
        if(typeof docTypeAttributeObject === 'object') {
            for(var docTypeAttribute in docTypeAttributeObject) {
                docTypeTag = docTypeTag + docTypeAttribute + '="' + docTypeAttributeObject[docTypeAttribute] + '", ';
            }
        }
        return docTypeTag;
    },
    'headAttributeHarvester': function(headAttributeObject) {
        var headTag = '';
        if(typeof headAttributeObject === 'object') {
            for(var headAttribute in headAttributeObject) {
                headTag = headTag + headAttribute + '="' + headAttributeObject[headAttribute] + '", ';
            }
        }
        return headTag;
    },
    'htmlAttributeHarvester': function(htmlAttributeObject) {
        var htmlTag = '';
        if(typeof htmlAttributeObject === 'object') {
            for(var htmlAttribute in htmlAttributeObject) {
                htmlTag = htmlTag + htmlAttribute + '="' + htmlAttributeObject[htmlAttribute] + '", ';
            }
        }
        return htmlTag;
    },
    'metaTagHarvester': function(metaTagsArray) {
        var metaTags = '';
        if(Array.isArray(metaTagsArray)) {
            if(metaTagsArray.length > 0) {
                for(var metaIndex in metaTagsArray) {
                    if(typeof metaTagsArray[metaIndex] === 'object') {
                        metaTags = metaTags + "  meta(";
                        for(var metaElement in metaTagsArray[metaIndex]) {
                            metaTags = metaTags + metaElement+"='"+metaTagsArray[metaIndex][metaElement]+"', ";
                        }
                        metaTags = metaTags + ")\n";
                    }
                }
            }
        }
        return metaTags;
    },
    'jsFileHarvester': function(jsFileArray) {
        var jsLinks = '';
        if(Array.isArray(jsFileArray)) {
            if(jsFileArray.length > 0) {
                for(var jsIndex in jsFileArray) {
                    jsLinks = jsLinks + "  script(src='"+jsFileArray[jsIndex]+"')\n";
                }
            }
        }
        return jsLinks;
    },
    'cssFileHarvester': function(cssFileArray) {
        var cssLinks = '';
        if(Array.isArray(cssFileArray)) {
            if(cssFileArray.length > 0) {
                for(var cssIndex in cssFileArray) {
                    cssLinks = cssLinks + "  link(rel='stylesheet', href='"+cssFileArray[cssIndex]+"')\n";
                }
            }
        }
        return cssLinks;
    },
    'parseAttributes': function(blockObject) {

        var attributes = {
            'docTypeTag': '',
            'htmlTag': '',
            'headTag': '',
            'metaTags': '',
            'cssLinks': '',
            'jsLinks': '',
            'afterBodyStart': {
                'jsLinks': '',
                'cssLinks': ''
            },
            'beforeBodyClose': {
                'jsLinks': '',
                'cssLinks': ''
            }
        };

        if(typeof blockObject.headMembers === 'object') {
            var headMembers = blockObject.headMembers;
            attributes.docTypeTag += this.docTypeAttributeHarvester(headMembers.docTypeAttributes);
            attributes.htmlTag    += this.htmlAttributeHarvester(headMembers.htmlAttributes);
            attributes.headTag    += this.headAttributeHarvester(headMembers.headAttributes);
            attributes.metaTags   += this.metaTagHarvester(headMembers.metaTags);
            attributes.cssLinks   += this.cssFileHarvester(headMembers.requiredUILibs.css);
            attributes.jsLinks    += this.jsFileHarvester(headMembers.requiredUILibs.js);
        }
        attributes.afterBodyStart.jsLinks  += this.jsFileHarvester(blockObject.afterBodyStart.js);
        attributes.afterBodyStart.cssLinks += this.cssFileHarvester(blockObject.afterBodyStart.css);

        if(this.jsFileHarvester(blockObject.beforeBodyClose.js) === 'undefined') {

        }
        attributes.beforeBodyClose.jsLinks  += this.jsFileHarvester(blockObject.beforeBodyClose.js);
        attributes.beforeBodyClose.cssLinks += this.cssFileHarvester(blockObject.beforeBodyClose.css);

        for(var innerBlockName in blockObject.includes) {

            var parseResult = this.parseAttributes(blockObject.includes[innerBlockName]);
            attributes.docTypeTag += parseResult.docTypeTag;
            attributes.htmlTag    += parseResult.htmlTag;
            attributes.headTag    += parseResult.headTag;
            attributes.metaTags   += parseResult.metaTags;
            attributes.cssLinks   += parseResult.cssLinks;
            attributes.jsLinks    += parseResult.jsLinks;
            attributes.afterBodyStart.jsLinks     += parseResult.afterBodyStart.jsLinks;
            attributes.afterBodyStart.cssLinks    += parseResult.afterBodyStart.cssLinks;
            attributes.beforeBodyClose.jsLinks    += parseResult.beforeBodyClose.jsLinks;
            attributes.beforeBodyClose.cssLinks   += parseResult.beforeBodyClose.cssLinks;

        }

        return attributes;

    },
    'createSkeleton': function(layout) {

        var document = {
            'docTypeTag': '',
            'htmlTag': '',
            'headTag': '',
            'titleTag':'',
            'metaTags': '',
            'cssLinks': '',
            'jsLinks': '',
            'afterBodyStart': {
                'jsLinks': '',
                'cssLinks': ''
            },
            'beforeBodyClose': {
                'jsLinks': '',
                'cssLinks': ''
            }
        };

        var headMembers;

        if(typeof layout.head.headMembers === 'object') {

            headMembers = layout.head.headMembers;

            document.docTypeTag += this.docTypeAttributeHarvester(headMembers.docTypeAttributes);
            document.htmlTag    += this.htmlAttributeHarvester(headMembers.htmlAttributes);
            document.headTag    += this.headAttributeHarvester(headMembers.headAttributes);
            document.metaTags   += this.metaTagHarvester(headMembers.metaTags);
            document.cssLinks   += this.cssFileHarvester(headMembers.requiredUILibs.css);
            document.jsLinks    += this.jsFileHarvester(headMembers.requiredUILibs.js);

        }

        document.afterBodyStart.jsLinks  += this.jsFileHarvester(layout.afterBodyStart.js);
        document.afterBodyStart.cssLinks += this.cssFileHarvester(layout.afterBodyStart.css);

        document.beforeBodyClose.jsLinks  += this.jsFileHarvester(layout.beforeBodyClose.js);
        document.beforeBodyClose.cssLinks += this.cssFileHarvester(layout.beforeBodyClose.css);

        for(var index in this.structuralBlocks) {
            for(var blockName in layout[this.structuralBlocks[index]]) {
                var structuralBlockObject = layout[this.structuralBlocks[index]][blockName];
                if(typeof structuralBlockObject === 'object') {
                    var parseResult = this.parseAttributes(structuralBlockObject);
                    document.docTypeTag += parseResult.docTypeTag;
                    document.htmlTag    += parseResult.htmlTag;
                    document.headTag    += parseResult.headTag;
                    document.metaTags   += parseResult.metaTags;
                    document.cssLinks   += parseResult.cssLinks;
                    document.jsLinks    += parseResult.jsLinks;
                    document.afterBodyStart.jsLinks     += parseResult.afterBodyStart.jsLinks;
                    document.afterBodyStart.cssLinks    += parseResult.afterBodyStart.cssLinks;
                    document.beforeBodyClose.jsLinks    += parseResult.beforeBodyClose.jsLinks;
                    document.beforeBodyClose.cssLinks   += parseResult.beforeBodyClose.cssLinks;
                }
            }
        }

        delete headMembers;

        document.docTypeTag = 'doctype 5';
        document.htmlTag    = "html(" + document.htmlTag + ")";
        document.headTag    = "head(" + document.headTag + ")";
        document.titleTag   = "title= '" + layout.head.title + "'\n";

        var skeletonJade = document.docTypeTag + "\n";
        skeletonJade += document.htmlTag + "\n";
        skeletonJade += ' ' + document.headTag + "\n";
        skeletonJade += document.metaTags + "\n";
        skeletonJade += '  ' + document.titleTag + "\n";
        skeletonJade += document.cssLinks + "\n";
        skeletonJade += document.jsLinks + "\n";
        skeletonJade += ' ' + "body\n";
        skeletonJade += document.afterBodyStart.cssLinks + "\n";
        skeletonJade += document.afterBodyStart.jsLinks + "\n\n";
        skeletonJade += ' ' + " !{bodyContent}\n";
        skeletonJade += document.beforeBodyClose.cssLinks + "\n";
        skeletonJade += document.beforeBodyClose.jsLinks + "\n";

        delete document;

        return skeletonJade;
    },
    'triggerOperator': function(triggerObject) {

        var jadeBlock       = '',
            moduleName      = triggerObject.module,
            fileName        = triggerObject.file,
            functionName    = triggerObject.function,
            functionParams  = triggerObject.functionParams;

        if(moduleName === "" || fileName === "") {
            return jadeBlock;
        }

        var renderFile = require("./"+moduleName+'/render/'+fileName);

        if(typeof renderFile[functionName] === 'function') {
            var arguments = [];
            for(var index in functionParams) {
                arguments.push(functionParams[index]);
            }
            jadeBlock = renderFile[functionName].apply(null, arguments);
        }

        return jadeBlock;
    },
    'triggerParser': function(layoutObject) {

        var jadeCode    = '',
            jadeContent  = '',
            blockName   = layoutObject.blockName,
            blockObject = layoutObject.blockObject;

        if(blockObject.type === 'structuralBlock') {

            var jadeTemplate    = this.triggerOperator(blockObject.trigger);
            var jadeFn          = jade.compile(jadeTemplate, { pretty: true });

            for(var innerBlockName in blockObject.includes) {

                jadeContent += this.triggerParser({
                    'blockName': innerBlockName,
                    'blockObject': blockObject.includes[innerBlockName]
                });

            }

            jadeCode += jadeFn({'content': jadeContent});

        }
        if(blockObject.type === 'contentBlock') {

            jadeCode += this.triggerOperator(blockObject.trigger);

        }

        return jadeCode;
    },
    'createBody': function(layout) {

        // Html Variable to Collect All Html
        var html = '';
        var currentLayout = '';
        for(var index in this.structuralBlocks) {
            currentLayout = layout[this.structuralBlocks[index]];
            for(var contentBlockName in currentLayout) {
                html += this.triggerParser({
                    'blockName': contentBlockName,
                    'blockObject': currentLayout[contentBlockName]
                });
            }
        }

        delete currentLayout, index, contentBlockName;
        return html;
    }
};