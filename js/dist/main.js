jQuery(document).ready(function(e){var a=e("#repo-count"),i=e("#hireable");e.get("https://api.github.com/users/eschmar",function(e){a.html(e.public_repos);var r="No";1==e.hireable&&(r="Yes"),i.html(r)});var r=Trianglify({width:window.innerWidth,height:window.innerHeight,cell_size:90,variance:1,x_colors:["#A7A7A7","#FFFFFF","#D3D3D3","#7B7B7B"],y_colors:"match_x",stroke_width:1.51,seed:"52a300"}),t=r.canvas();t.id="trianglify",document.body.appendChild(t)});var $game=$("#game");$game.gameOfLife({transparent:!1,cellSize:5,speed:100});var game=$game.data("gameOfLife");game.addCustomLifeForm1(4,5),game.addCustomLifeForm1(140,105),game.toggle();