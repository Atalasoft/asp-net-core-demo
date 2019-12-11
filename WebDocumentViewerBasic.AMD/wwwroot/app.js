'use strict';

requirejs.config({
    paths: {
        'jquery': 'lib/jquery/jquery.min',
        'jquery-ui': 'lib/jquery-ui/jquery-ui.min',
        'raphael': 'lib/raphael/raphael.min',
        'clipboard': 'lib/clipboard/clipboard.min',
        'web-document-viewer': 'lib/web-document-viewer/atalaWebDocumentViewer'
    }
});

requirejs(["app/main"]);