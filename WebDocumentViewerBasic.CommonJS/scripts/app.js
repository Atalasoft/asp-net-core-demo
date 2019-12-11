require('web-document-viewer/atalaWebDocumentViewer.css');
require('jquery-ui-dist/jquery-ui.css');


var Atalasoft = require('webDocumentViewer');
var jQuery = require('jquery');
var utils = require('./utils');

var _viewer;

// Initialize Web Viewing
try {
    // Initialize Web Document Viewer
    _viewer = new Atalasoft.Controls.WebDocumentViewer({
        parent: jQuery('.atala-document-container'),
        toolbarparent: jQuery('.atala-document-toolbar'),
        'allowforms': true,
        allowannotations: true,
        'savepath': '.',
        'annotations': {
            'atala_iuname': 'mm'
        },
        serverurl: 'wdv'
    });

    // Uncomment the following 2 lines if the toolbar buttons should be displayed without text
    //$('.atala-ui-button .ui-button-text').html('&nbsp;');
    //$('.atala-ui-button').css({ height: '28px', width: '28px' });

    utils.loadFile(_viewer);

} catch (error) {
    utils.appendStatus("Thrown error: " + error.description);
}

jQuery('#FileSelectionList').on('change', function () { utils.loadFile(_viewer); });


