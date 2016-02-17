jQuery(document).ready(function($) {
    var $repoCount = $('#repo-count');
    var $hireable = $('#hireable');

    $.get("https://api.github.com/users/eschmar", function(data) {
        $repoCount.html(data.public_repos);

        var hireableVal = "No";
        if (data.hireable == true) { hireableVal = "Yes"}
        $hireable.html(hireableVal);
    });

//"#BBB8BF", "#7C7A7F", "#F9F5FF", "#3E3D40", "#E0DCE5"

    // background
    var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,


        //cell_size: 60,
        variance: 1,
        //x_colors: ["#31a354","#addd8e","#f7fcb9","#addd8e","#31a354"],
        x_colors: 'PRGn',
        y_colors: 'match_x',
        //y_colors: ["#31a354","#addd8e","#f7fcb9"],
        //palette: Trianglify.colorbrewer,
        //color_space: 'lab',
        //color_function: false,
        stroke_width: 1.51,
        //width: $header.width(),
        //height: $header.height(),
        //seed: '52a300'
    });

    var background = pattern.canvas();
    background.id = "trianglify";
    document.body.appendChild(background);
});




