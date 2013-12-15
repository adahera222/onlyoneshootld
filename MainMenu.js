function MainMenu() {
    this.update = function (dt) {
        if (mouse.clicked) {
            scene = new Level1;
            mouse.clicked = false;
        }
    }
    this.draw = function (ctx) {
        ctx.save();
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('JUST ONE SHOT', game_width / 2, 100);
        
        ctx.font = '24px Arial';
        ctx.fillText('You have only one shoot. Hit all targets!', game_width / 2, 200);
        
        ctx.font = '32px Arial';
        ctx.fillText('CLICK TO START GAME', game_width / 2, 300);
        ctx.restore();
    }
}

    
