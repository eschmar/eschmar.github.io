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
    colors: ["#5D9EFF", "#B5D3FF", "#84B6FF", "#3486FF", "#1170FB", "#FFDD00"],
    onClick: function(game, x, y) {
        game.addGlider(x,y);
    }
});


var game = $game.data("gameOfLife");
//game.randomize();
game.addCustomLifeForm1(4,5);
game.addCustomLifeForm1(140,105);
game.addWeekender(71,38);

game.toggle();

document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 82:
            game.randomize();
            break;
        case 67:
        case 75:
            game.killAll();
            break;
        case 84:
            game.toggle();
            break;
    }
});

// pressure js (force touch scramble)
$game.pressure({
    startDeepPress: function(event){
        game.randomize();
        console.log("pew");
    },
    endDeepPress: function(){
        // this is called when the "force click" / "deep press" end
    }
});
