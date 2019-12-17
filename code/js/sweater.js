class Sweater {
  constructor(ctx, figures, patterns) {
    this.ctx = ctx;
    this.grid = [];
    this.variations = [];
    this.figures = figures;
    this.patterns = patterns;

    this.rowLength = 500;
    this.columnLength = 700;
    this.variationsNumber = 5;
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
    for (let c = 0; c < this.columnLength; c += 100) {
      let position = [];
      for (let r = 0; r < this.rowLength; r += 100) {
        position.push([r, c]);
      }
      this.grid.push(position);
    }
    this.randomizer(this.grid);
    this.grid.forEach(e => {
      this.randomizer(e);
    });
    this.grid.forEach((line, lineIndex) => {
      line.forEach((position, positionIndex) => {
        let randomE = Math.floor(Math.random() * this.figures.length);
        this.grid[lineIndex][positionIndex].push(this.figures[randomE]);
      });
    });
  }
  createVariation() {
    for (let i = 0; i < this.variationsNumber; i++) {
      let randomX = this.rowLength * 2 - 100 - Math.floor(Math.random() * ((this.rowLength - 100) / 100)) * 100;
      let randomY = Math.floor(Math.random() * ((this.columnLength - 100) / 100)) * 100;
      let randomPos = [randomX, randomY];
      if (this.variations.indexOf(randomPos) === -1) {
        this.variations.push([randomX, randomY]);
      }
    }
    let randomFigure = this.randomizer(this.figures);
    let i = 0;
    this.variations.forEach(position => {
      if (this.search(position[0], position[1], randomFigure[i])) {
        i++;
      } else {
        position.push(randomFigure[i]);
      }
    });
  }
  draw(figure) {
    if (figure[0][0][0]) {
      figure.forEach(line => {
        line.forEach(position => {
          position[2].draw(position[0], position[1]);
          position[2].drawMirror(position[0], position[1]);
        });
      });
    }
  }
  search(posX, posY, figure) {
    this.grid.forEach(line => {
      line.forEach(position => {
        return position[0] === posX && position[1] === posY && position[2] === figure;
      });
    });
  }
  variation() {
    console.log(this.variations);
  }
}
