jQuery(document).ready(function($) {
    var $repoCount = $('#repo-count');
    var $hireable = $('#hireable');
    var $location = $('#location')

    $.get("https://api.github.com/users/eschmar", function(data) {
        $repoCount.html(data.public_repos);
        $location.html(data.location.replace(', Sweden', ''));

        var hireableVal = "No";
        if (data.hireable == true) { hireableVal = "Yes"}
        $hireable.html(hireableVal);
    });

    // background
    $(window).bind('resize', function(event) {
        var width = window.innerWidth, height = window.innerHeight;

        if (width >= 768) {
            $('#trianglify').remove();

            var pattern = Trianglify({
                width: window.innerWidth,
                height: window.innerHeight,
                cell_size: 90,
                variance: 1,
                x_colors: ["#5D9EFF", "#B5D3FF", "#84B6FF", "#3486FF", "#1170FB"],
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
        }else {
            $('#trianglify').remove();
        }
    });

    $(window).trigger('resize');
});

// game of life
var $game = $('#game');
$game.gameOfLife({
    transparent: false,
    cellSize: 5,
    speed: 100,
    colors: ["#5D9EFF", "#B5D3FF", "#84B6FF", "#3486FF", "#1170FB", "#FFDD00"]
});


var game = $game.data("gameOfLife");
//game.randomize();
game.addCustomLifeForm1(4,5);
game.addCustomLifeForm1(140,105);

game.toggle();