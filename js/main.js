jQuery(document).ready(function($) {
    var $repoCount = $('#repo-count');
    var $hireable = $('#hireable');

    $.get("https://api.github.com/users/eschmar", function(data) {
        $repoCount.html(data.public_repos);

        var hireableVal = "No";
        if (data.hireable == true) { hireableVal = "Yes"}
        $hireable.html(hireableVal);
    });

    // background
    //"#BBB8BF", "#7C7A7F", "#F9F5FF", "#3E3D40", "#E0DCE5"
    var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 90,
        variance: 1,
        x_colors: 'Spectral',
        y_colors: 'match_x',
        //palette: Trianglify.colorbrewer,
        //color_space: 'lab',
        //color_function: false,
        stroke_width: 1.51,
        seed: '52a300'
    });

    var background = pattern.canvas();
    background.id = "trianglify";
    document.body.appendChild(background);
});

// game of life
var $game = $('#game');
$game.gameOfLife({
    transparent: false,
    cellSize: 5,
    speed: 100
});

var game = $game.data("gameOfLife");
//game.randomize();
game.addCustomLifeForm1(4,5);
game.addCustomLifeForm1(140,105);

game.toggle();