function Player() {
    this.x = 0;
    this.y = 0;
    this.shooted = false;
}

Player.prototype.update = function (dt) {
    this.x = 40;
    this.y = mouse.y;
    
    
}

Player.prototype.draw = function (ctx) {
    ctx.save();
    ctx.fillStyle = 'brown';
    ctx.fillRect(this.x - 16, this.y - 16, 32, 74); //body
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x - 16, this.y - 16, 48, 8); //hat
    ctx.fillRect(this.x - 16, this.y - 24, 32, 8);
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x + 16, this.y, 24, 8); //gun
    ctx.fillRect(this.x + 16, this.y, 6, 16);
    ctx.restore();
}