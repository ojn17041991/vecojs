const version = "1.0.2";
const veco_class_name = "__veco_element";

function veco_vectorize(element, resource_name) {
    var request = new XMLHttpRequest();
    request.open("GET", resource_name);
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function(event) {
        var response = event.target.responseText;
        var markup = new DOMParser().parseFromString(response, "image/svg+xml");
        var markup_element = markup.documentElement;
        
        var element_class = element.attributes["class"];
        if (typeof element_class != "undefined") {
            var class_names = element_class.value.split(' ');
            console.log(class_names);
            for (var i = 0; i < class_names.length; ++i) {
                markup_element.classList.add(class_names[i]);
            }
            markup_element.classList.add(veco_class_name);
        }
        
        var element_id = element.attributes["id"];
        if (typeof element_id != "undefined") {
            markup_element.id  = element_id.value;
        }
        
        element.parentElement.insertBefore(markup_element, element);
        element.parentElement.removeChild(element);
    });
    request.send();
}

function veco_colorize_by_id(
    id,
    color,
    css_path_selector = "path"
) {
    __colorize(document.getElementById(id).querySelectorAll(css_path_selector), color);
}

function veco_colorize_by_class_name(
    class_name,
    color,
    css_path_selector = "path"
) {
    var svgs = document.getElementsByClassName(class_name);
    for (var i = 0; i < svgs.length; ++i) {
        __colorize(svgs[i].querySelectorAll(css_path_selector), color);
    }
}

function veco_colorize_all(
    color,
    css_path_selector = "path"
) {
    var svgs = document.getElementsByClassName(veco_class_name);
    for (var i = 0; i < svgs.length; ++i) {
        __colorize(svgs[i].querySelectorAll(css_path_selector), color);
    }
}

function __colorize(
    paths,
    color
) {
    for (var i = 0; i < paths.length; ++i) {
        paths[i].style.fill = color;
    }
}