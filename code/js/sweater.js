class Sweater {
  constructor(ctx, figures, width, height, scale) {
    this.ctx = ctx;
    this.grid = [];
    this.variations = [];
    this.blanks = [];
    this.figures = figures;
    this.scale = scale;

    this.width = width / 2;
    this.height = height;
    this.variationsNumber = 5;
    this.blanksNumber = 10;
    this.posX = 0;
    this.posY = 0;
    this.posXM = this.width * 2 - 100;

    this.figureVariations = [];
  }
  randomizer(array) {
    for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  }
  createGrid() {
    this.grid = [];
    // create linear grid
    for (let c = 0; c < this.height; c += 100) {
      let position = [];
      for (let r = 0; r < this.width; r += 100) {
        position.push([r, c]);
      }
      this.grid.push(position);
    }
    // randomize grid
    this.randomizer(this.grid);
    this.grid.forEach(e => {
      this.randomizer(e);
    });
    // add random figures to each position
    this.grid.forEach(line =>
      line.forEach(position => {
        let randomE = Math.floor(Math.random() * this.figures.length);
        position.push(this.figures[randomE]);
      })
    );
  }
  addVariation() {
    this.variations = [];
    // add varied figure to every grid position
    this.grid.forEach(line =>
      line.forEach(position => {
        let figuresCopy = this.figures.slice();
        figuresCopy.splice(figuresCopy.indexOf(position[2]), 1);
        let randomE = Math.floor(Math.random() * figuresCopy.length);
        position.push(figuresCopy[randomE]);
      })
    );
    console.log(this.grid);
    // add all grid positions to variations array
    this.grid.forEach(line =>
      line.forEach(position => {
        this.variations.push(position);
      })
    );
    // randomize variations, create blanks and shrink both arrays
    this.randomizer(this.variations);
    this.blanks = this.variations.slice(this.variationsNumber, this.blanksNumber + this.variationsNumber);
    console.log(this.blanks);
    this.variations.splice(0, this.variations.length - this.variationsNumber);
  }
  draw() {
    this.grid.forEach(line =>
      line.forEach(position => {
        position[2].draw(position[0], position[1]);
        position[2].drawMirror(position[0], position[1]);
        for (let i = 0; i < this.variationsNumber; i++) {
          if (position === this.variations[i]) {
            position[3].drawMirror(position[0], position[1]);
          }
        }
      })
    );
    this.blanks.forEach(position => {
      this.ctx.clearRect(position[0], position[1], 100, 100);
      this.ctx.clearRect(this.width * 2 - 100 - position[0], position[1], 100, 100);
    });
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width * 2, this.height);
  }
  title(background) {
    this.ctx.fillStyle = this.ctx.createPattern(background, "repeat");
    this.ctx.fill();
    this.fillStyle = "white";
    this.ctx.font = "90px monospace";
    this.ctx.fillText("FIX THE SWEATER", 100, 350);
    this.ctx.font = "40px monospace";
    this.ctx.fillText("CLICK TO START", 350, 390);
  }
  gameOver() {
    this.clear();
    this.ctx.font = "100px monospace";
    this.ctx.fillText("GAME OVER", 250, 350);
    this.ctx.font = "40px monospace";
    this.ctx.fillText("CLICK ONLY ON THE MISTAKES", 200, 390);
  }
  timeUp(score) {
    this.clear();
    this.ctx.font = "100px monospace";
    this.ctx.fillText("TIME'S UP", 250, 350);
    this.ctx.font = "40px monospace";
    this.ctx.fillText("YOU FIXED " + Math.floor(score / 5) + " SWEATERS", 280, 390);
  }
}
