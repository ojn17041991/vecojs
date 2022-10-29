function veco_vectorize(svg, resource_name) {
    var request = new XMLHttpRequest();
    request.open("GET", resource_name);
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function(event) {
        var response = event.target.responseText;
        var doc = new DOMParser();
        var markup = doc.parseFromString(response, "image/svg+xml");
        svg.parentElement.insertBefore(markup.documentElement, svg);
        svg.parentElement.removeChild(svg);
    });
    request.send();
}
function veco_colorize() {
    var picker = document.getElementById("color_picker");
    var svgs = document.getElementsByTagName("svg");
    for (var i = 0; i < svgs.length; ++i) {
        var paths = svgs[i].getElementsByTagName("path");
        for (var j = 0; j < paths.length; ++j) {
            paths[j].style.fill = picker.value;
        }
    }
}