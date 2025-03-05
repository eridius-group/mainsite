if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    node1 = "#222"
    node2 = "#333"
    node3 = "#444"
} else {
    node1 = "#BBB"
    node2 = "#AAA"
    node3 = "#999"
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