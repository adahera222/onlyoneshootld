function Win() {
    this.update = function (dt) {
        if (mouse.clicked) {
            current_lvl = 1;
            scene = MainMenu;
            mouse.clicked = false;
        }
    }
    this.draw = function (ctx) {
        ctx.save();
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('You win!', game_width / 2, 100);
        
        ctx.font = '24px Arial';
        ctx.fillText('Oh yeah, you really completed this shit! Well done!', game_width / 2, 200);
        
        ctx.font = '32px Arial';
        ctx.fillText('CLICK TO RETURN TO MENU', game_width / 2, 300);
        
        ctx.font = '24px Arial';
        ctx.fillText('by Arthes - thanks! visit arthes.kissr.com', game_width / 2, 400);
        ctx.restore();
    }
}