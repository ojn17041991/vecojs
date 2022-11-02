const version = "1.0.5";
const veco_class_name = "__veco_element";

function veco_vectorize(element, resource_name) {
    if (typeof element.attributes["class"] != "undefined" && element.attributes["class"].value.indexOf(veco_class_name) != -1) {
        return;
    }
    
    var request = new XMLHttpRequest();
    request.open("GET", resource_name);
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function(event) {
        var response = event.target.responseText;
        var markup = new DOMParser().parseFromString(response, "image/svg+xml");
        var markup_element = markup.documentElement;
        
        var element_attributes = element.attributes;
        for (var i = 0; i < element_attributes.length; ++i) {
            var attribute = element_attributes[i];
            if (attribute.name == "class") {
                // The classes have to be done 1-by-1, so we skip it here as we are dealing solely with ad-hoc values.
                continue;
            }
            markup_element.setAttribute(attribute.name, attribute.value);
        }
        
        var element_class = element.attributes["class"];
        if (typeof element_class != "undefined") {
            var class_names = element_class.value.split(' ');
            for (var i = 0; i < class_names.length; ++i) {
                markup_element.classList.add(class_names[i]);
            }
            markup_element.classList.add(veco_class_name);
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
