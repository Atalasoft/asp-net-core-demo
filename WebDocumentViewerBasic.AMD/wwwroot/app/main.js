define(["web-document-viewer", "jquery", "app/utils"],
    function(Atalasoft, jQuery, utils) {
        var viewer;

        // Initialize Web Viewing
        try {
            // Initialize Web Document Viewer
            viewer = new Atalasoft.Controls.WebDocumentViewer({
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

            utils.loadFile(viewer);

        } catch (error) {
            utils.appendStatus("Thrown error: " + error.description);
            return;
        }

        jQuery('#FileSelectionList').on('change', function() { utils.loadFile(viewer); });
    });
