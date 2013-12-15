function Level3() {
    this.player = new Player();
    this.bullet = new Bullet();
    this.targets = [new Target(200, 300), new Target(300, 300, [100, 400], 75)];
    
    this.update = function (dt) {
        this.player.update(dt);
        this.bullet.update(dt);
        for (var i in this.targets) this.targets[i].update(dt);
        
        if (!this.bullet.started) this.bullet.x = this.player.x + 40;
        if (!this.bullet.started) this.bullet.y = this.player.y;
        
        
        for (var i in this.targets) {
            var bullet = this.bullet,
                target = this.targets[i];
            if (bullet.x > target.x - 32 && bullet.x < target.x + 32 && bullet.y > target.y - 32 && bullet.y < target.y + 32) {
                this.targets.splice(i, 1);
            }
        }
        
        if (bullet.x > game_width) scene = new Bad;
        
        if (this.targets.length == 0) {
            if (current_lvl == 10) scene = new Win;
            else scene = new Good;
            mouse.clicked = false;
        }
        
    }
    this.draw = function (ctx) {
        ctx.save();
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('LEVEL 3', game_width / 2, 48);
        ctx.restore();
        
        this.player.draw(ctx);
        this.bullet.draw(ctx);
        for (var i in this.targets) this.targets[i].draw(ctx);
    }
}