if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    node1 = "#547c74"
    node2 = "#547c74"
    node3 = "#4c746c"
} else {
    node1 = "#124e44"
    node2 = "#1c645c"
    node3 = "#1c6c5c"
}

particlesJS("particles-js", {
    "particles": {
        "color": {"value": node1},
        "shape": {
            "stroke": {"width": 0, "color": node2},
        },
        "line_linked": {"color": node3},
        "size": {
            "value": 1,
        }
    }
});