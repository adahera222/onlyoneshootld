//variables
var canvas = document.getElementById('game'),
    surface = canvas.getContext('2d'),
    game_width = 640,
    game_height = 480,
    fps = 120,
    last_update = Date.now(),
    scene = {},
    mouse = {
        clicked: false,
        x: 0,
        y: 0
    },
    current_lvl = 1;
    
    canvas.width = game_width;
    canvas.height = game_height;
    
    scene = new MainMenu;
    
//gameloop
function GameLoop() {
    var current_time = Date.now(),
        delta_time = (current_time - last_update) / 1000;
        
    last_update = Date.now();

    //update
    if (scene.update) scene.update(delta_time);
    
    //draw
    surface.clearRect(0, 0, game_width, game_height);
    if (scene.draw) scene.draw(surface);
    
    setTimeout(GameLoop, 1000 / fps);
}

GameLoop();

//events
canvas.onmousemove = function (e) {
    var rect = canvas.getBoundingClientRect();
    
    mouse.x = e.pageX - rect.left;
    mouse.y = e.pageY - rect.top;
}

canvas.onmousedown = function (e) {
    mouse.clicked = true;
}

canvas.onmouseup = function (e) {
    mouse.clicked = false;
}