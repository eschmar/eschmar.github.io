jQuery(document).ready(function(e){var a=e("#repo-count"),i=e("#hireable");e.get("https://api.github.com/users/eschmar",function(e){a.html(e.public_repos);var r="No";1==e.hireable&&(r="Yes"),i.html(r)});var r=e("#game");r.gameOfLife({transparent:!1,cellSize:5,speed:300});var t=r.data("gameOfLife");t.randomize(),t.toggle();var n=Trianglify({width:window.innerWidth,height:window.innerHeight,cell_size:90,variance:1,x_colors:"Spectral",y_colors:"match_x",stroke_width:1.51,seed:"52a300"}),o=n.canvas();o.id="trianglify",document.body.appendChild(o)});