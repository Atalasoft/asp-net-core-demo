var jQuery = require('jquery');

function appendStatus(msg) {
    var stat = jQuery("#status");
    stat.append(msg + "<br>");
}


function loadFile(viewer) {
    viewer.OpenUrl(jQuery('#FileSelectionList').val(), '');
}

module.exports = {
    appendStatus,
    loadFile
};