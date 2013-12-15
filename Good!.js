function Good() {
    this.update = function (dt) {
        if (mouse.clicked) {
            current_lvl++;
            scene = new window['Level'+current_lvl];
            mouse.clicked = false;
        }
    }
    this.draw = function (ctx) {
        ctx.save();
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Good!', game_width / 2, 100);
        
        ctx.font = '24px Arial';
        ctx.fillText('Very cool.', game_width / 2, 200);
        
        ctx.font = '32px Arial';
        ctx.fillText('CLICK TO PLAY NEXT LEVEL', game_width / 2, 300);
        ctx.restore();
    }
}