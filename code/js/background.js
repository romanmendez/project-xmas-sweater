class Background {
  constructor(ctx, width, height) {
    this.background;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }
  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    let backgrounPoly = [0, 5, 3, 10, 7, 10, 10, 5, 10, 0, 5, 8, 0, 0];
    this.ctx.beginPath();
    this.ctx.moveTo(backgrounPoly[0], backgrounPoly[1]);
    for (let i = 0; i < backgrounPoly.length; i += 2) {
      this.ctx.lineTo(backgrounPoly[i], backgrounPoly[i + 1]);
    }
    this.ctx.fillStyle = "white";
    // this.ctx.fillStyle = "#db2430";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
