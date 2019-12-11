define(['jquery'],
    function(jQuery) {
        return {
            // Show status and error messages
            appendStatus: function(msg) {
                var stat = jQuery("#status");
                stat.append(msg + "<br>");
            },
            // Loads file
            loadFile: function(viewer) {
                viewer.OpenUrl(jQuery('#FileSelectionList').val(), '');
            }
        };
    });