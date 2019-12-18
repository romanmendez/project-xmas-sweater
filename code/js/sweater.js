class Sweater {
  constructor(ctx, figures, patterns) {
    this.ctx = ctx;
    this.grid = [];
    this.variations = [];
    this.figures = figures;
    this.patterns = patterns;

    this.rowLength = 500;
    this.columnLength = 700;
    this.variationsNumber = 10;
    this.posX = 0;
    this.posY = 0;
    this.posXM = this.rowLength * 2 - 100;
    this.blank = 10;

    this.figureVariations = [];
  }
  randomizer(array) {
    for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  }
  createGrid() {
    // create linear grid
    for (let c = 0; c < this.columnLength; c += 100) {
      let position = [];
      for (let r = 0; r < this.rowLength; r += 100) {
        position.push([r, c]);
      }
      this.grid.push(position);
    }
    console.log("pre-figure", this.grid);
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
    // add varied figure to every grid position
    this.grid.forEach(line =>
      line.forEach(position => {
        let figureVar = this.figures.slice();
        figureVar.splice(figureVar.indexOf(position[2]), 1);
        let randomE = Math.floor(Math.random() * figureVar.length);
        position.push(figureVar[randomE]);
      })
    );
    // add all grid positions to variations array
    this.grid.forEach(line =>
      line.forEach(position => {
        this.variations.push(position);
      })
    );
    // randomize and shrink variations array
    this.randomizer(this.variations);
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
  }
  searchGrid(posX, posY, figure) {
    this.grid.forEach(line => {
      line.forEach(position => {
        return position[0] === posX && position[1] === posY && position[2] === figure;
      });
    });
  }
}
