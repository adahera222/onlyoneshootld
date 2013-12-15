function Bad() {
    this.update = function (dt) {
        if (mouse.clicked) {
            current_lvl = 1;
            scene = new window['Level'+current_lvl];
            mouse.clicked = false;
        }
    }
    this.draw = function (ctx) {
        ctx.save();
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('BAD!', game_width / 2, 100);
        
        ctx.font = '24px Arial';
        ctx.fillText('You must restart this shit. :)', game_width / 2, 200);
        
        ctx.font = '32px Arial';
        ctx.fillText('CLICK TO RESTART', game_width / 2, 300);
        ctx.restore();
    }
}