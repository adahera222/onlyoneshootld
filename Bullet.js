function Bullet() {
    this.x = 10;
    this.y = 10;
    this.speed = 2000;
    this.started = false;
    
}

Bullet.prototype.update = function (dt) {
    if (mouse.clicked) this.started = true;
    if (this.started) this.x += this.speed * dt;
}

Bullet.prototype.draw = function (ctx) {
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}