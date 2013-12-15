function Target(x, y, floating, speed) {
    this.x = x;
    this.y = y;
    
    this.base_x = x;
    this.base_y = y;
    
    this.floating = floating || 0;
    this.speed = speed || 0;
}

Target.prototype.update = function (dt) {
    
    if (this.floating) {
    
        this.y -= dt * this.speed;
        
        if (this.y <= this.floating[0]) {
            this.y = this.floating[0];
            this.speed *= -1;
        }
        
        if (this.y >= this.floating[1]) {
            this.y = this.floating[1];
            this.speed *= -1;
        }
    
    }
    
}

Target.prototype.draw = function (ctx) {
    ctx.save();
    ctx.fillStyle='orange';
    ctx.fillRect(this.x - 32, this.y - 32, 64, 64);
    ctx.restore();
}