class Figure {
  constructor(ctx, figure, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.figure = this.getFigure(figure);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }
  draw(sX, sY) {
    this.ctx.beginPath();
    this.ctx.moveTo(sX + this.figure[0], sY + this.figure[1]);
    for (let i = 0; i < this.figure.length; i += 2) {
      this.ctx.lineTo(sX + this.figure[i], sY + this.figure[i + 1]);
    }
    this.ctx.fill();
    this.ctx.closePath();
  }
  drawMirror(sX, sY) {
    this.ctx.save();
    this.ctx.translate(this.canvasWidth, 0);
    this.ctx.scale(-1, 1);
    this.ctx.clearRect(sX, sY, 100, 100);
    this.ctx.beginPath();
    this.ctx.moveTo(sX + this.figure[0], sY + this.figure[1]);
    for (let i = 0; i < this.figure.length; i += 2) {
      this.ctx.lineTo(sX + this.figure[i], sY + this.figure[i + 1]);
    }
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
  getFigure(figure) {
    let Coordinates = {
      darkStar: [48, 0, 8, 94, 14, 94, 100, 32, 0, 32, 90, 94, 93, 91, 11, 36, 89, 36, 16, 88, 18, 80, 49, 10, 93, 93, 95, 87],
      goat: [41, 24, 35, 15, 25, 10, 17, 9, 10, 9, 5, 6, 1, 1, 5, 11, 10, 14, 22, 17, 30, 22, 34, 30, 34, 33, 31, 35, 23, 36, 17, 37, 12, 40, 12, 42, 17, 44, 26, 47, 31, 48, 34, 37, 36, 37, 34, 45, 34, 48, 37, 49, 38, 54, 37, 56, 33, 53, 32, 50, 30, 51, 30, 59, 33, 64, 38, 70, 41, 73, 42, 78, 43, 82, 45, 85, 47, 88, 49, 91, 48, 94, 49, 98, 51, 95, 54, 88, 58, 82, 58, 74, 59, 71, 64, 69, 69, 61, 70, 56, 68, 50, 66, 52, 63, 55, 61, 54, 63, 50, 66, 48, 68, 48, 66, 39, 64, 34, 67, 34, 68, 43, 71, 47, 77, 47, 84, 44, 88, 41, 84, 39, 74, 35, 65, 32, 69, 25, 74, 20, 80, 17, 88, 15, 94, 12, 97, 7, 99, 1, 94, 7, 88, 9, 81, 9, 74, 11, 67, 14, 63, 18, 60, 23, 57, 25, 52, 27, 49, 27, 45, 25, 42, 25],
      picket1: [50, 40, 100, 90, 100, 100, 50, 50, 0, 100, 0, 90],
      picket2: [50, 20, 100, 70, 100, 100, 50, 50, 0, 100, 0, 70],
      picket3: [50, 0, 100, 50, 100, 100, 50, 50, 0, 100, 0, 50],
      reindeer: [57, 0, 57, 13, 51, 13, 51, 8, 45, 8, 45, 24, 30, 24, 29, 8, 24, 8, 24, 12, 18, 12, 18, 1, 11, 1, 11, 7, 5, 7, 5, 13, 16, 14, 17, 20, 23, 20, 24, 24, 28, 25, 29, 30, 23, 30, 23, 35, 16, 36, 17, 46, 30, 47, 30, 53, 36, 53, 36, 99, 42, 100, 41, 76, 48, 76, 48, 99, 54, 99, 54, 77, 73, 77, 74, 100, 81, 100, 81, 77, 86, 77, 86, 100, 92, 100, 93, 53, 85, 53, 86, 48, 93, 47, 93, 41, 86, 41, 86, 47, 46, 46, 45, 36, 52, 36, 52, 31, 46, 31, 46, 24, 51, 24, 51, 20, 57, 19, 57, 14, 70, 14, 70, 8, 64, 8, 64, 1, 57, 0],
      anis: [72, 0, 71, 25, 24, 73, 0, 74, 18, 55, 80, 55, 98, 73, 76, 75, 28, 27, 27, 0, 45, 19, 46, 84, 28, 100, 27, 77, 74, 29, 100, 29, 80, 47, 19, 48, 0, 29, 23, 28, 71, 77, 71, 100, 53, 84, 51, 57, 53, 19],
      pitchfork: [4, 91, 10, 96, 55, 56, 66, 65, 75, 65, 86, 57, 92, 51, 97, 57, 100, 39, 87, 41, 89, 46, 76, 57, 67, 56, 61, 50, 78, 35, 83, 38, 89, 22, 73, 27, 75, 31, 55, 46, 53, 41, 50, 36, 52, 29, 58, 22, 63, 19, 69, 23, 74, 7, 58, 9, 60, 13, 51, 19, 45, 25, 44, 35, 46, 45, 48, 49, 48, 51],
      dinosaur: [50, 5, 50, 10, 46, 10, 45, 37, 43, 36, 43, 40, 36, 39, 36, 44, 30, 44, 30, 48, 26, 48, 26, 52, 18, 52, 18, 47, 14, 48, 14, 45, 11, 44, 10, 36, 6, 37, 7, 60, 25, 78, 26, 94, 34, 95, 34, 91, 30, 91, 30, 86, 34, 86, 34, 82, 38, 82, 39, 76, 42, 76, 42, 81, 46, 81, 46, 94, 54, 95, 54, 91, 50, 91, 50, 74, 56, 74, 57, 68, 63, 65, 63, 51, 68, 50, 68, 56, 73, 56, 73, 44, 63, 44, 63, 37, 78, 37, 78, 32, 67, 32, 67, 28, 88, 29, 89, 11, 83, 11, 83, 6, 60, 6, 60, 16, 54, 17, 55, 12, 60, 11, 61, 6, 51, 6],
      horns: [9, 8, 11, 24, 25, 36, 34, 26, 47, 23, 64, 23, 75, 31, 78, 37, 86, 33, 93, 23, 95, 5, 98, 22, 98, 38, 93, 49, 85, 53, 79, 59, 74, 51, 64, 48, 59, 50, 56, 57, 62, 65, 79, 66, 78, 78, 73, 96, 59, 95, 57, 83, 50, 83, 48, 89, 46, 95, 34, 95, 27, 81, 21, 67, 44, 65, 49, 57, 45, 48, 35, 48, 28, 53, 23, 57, 15, 55, 6, 38, 5, 25],
      tree: [50, 0, 29, 18, 41, 19, 20, 45, 34, 45, 10, 70, 45, 70, 45, 90, 55, 90, 55, 70, 90, 70, 65, 45, 80, 45, 60, 19, 72, 18],
      heart: [51, 90, 5, 50, 5, 30, 15, 15, 35, 15, 50, 30, 65, 15, 84, 15, 95, 30, 95, 50],
      ax: [14, 10, 10, 19, 8, 28, 11, 42, 16, 51, 22, 47, 29, 39, 38, 38, 44, 38, 48, 97, 53, 97, 56, 94, 52, 37, 59, 34, 68, 34, 74, 36, 80, 38, 79, 29, 79, 19, 77, 8, 73, 3, 70, 1, 61, 9, 50, 15, 48, 6, 39, 8, 41, 17, 27, 15],
      star: [50, 0, 61, 35, 98, 35, 68, 57, 79, 91, 50, 70, 21, 91, 32, 57, 2, 35, 39, 35],
      triangle: [50, 70, 41, 85, 60, 85]
    };
    return Coordinates[figure];
  }
}

let reindeer = new Figure(ctx, "reindeer", width, height);
let picket1 = new Figure(ctx, "picket1", width, height);
let picket2 = new Figure(ctx, "picket2", width, height);
let picket3 = new Figure(ctx, "picket3", width, height);
let darkStar = new Figure(ctx, "darkStar", width, height);
let goat = new Figure(ctx, "goat", width, height);
let anis = new Figure(ctx, "anis", width, height);
let pitchfork = new Figure(ctx, "pitchfork", width, height);
let dinosaur = new Figure(ctx, "dinosaur", width, height);
let horns = new Figure(ctx, "horns", width, height);
let tree = new Figure(ctx, "tree", width, height);
let heart = new Figure(ctx, "heart", width, height);
let ax = new Figure(ctx, "ax", width, height);
let star = new Figure(ctx, "star", width, height);
let triangle = new Figure(ctx, "triangle", width, height);

let figuresArr = [reindeer, darkStar, goat, anis, pitchfork, dinosaur, horns, tree, heart, ax, star, triangle];
