class Grid {
  constructor(ctx, figures, patterns) {
    this.ctx = ctx;
    this.grid = [];
    this.figures = figures;
    this.patterns = patterns;

    this.rowLength = 5;
    this.columnLength = 7;
    this.posX = 0;
    this.posY = 0;
    this.posXM = this.rowLength * 2 * 100 - 100;
    this.blank = 10;
  }
  create() {
    for (let c = 0; c < this.columnLength; c++) {
      let figureRows = [];
      let patternRows = [];
      for (let r = 0; r < this.rowLength; r++) {
        let randomFigure = Math.floor(Math.random() * (this.figures.length + this.blank));
        figureRows.push(this.figures[randomFigure]);
        patternRows.push(this.patterns[c]);
      }
      this.grid.push(figureRows, patternRows);
    }
  }
  shuffle() {
    for (let i = this.grid.length - 1; i > 0; i -= 1) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [this.grid[i], this.grid[randomIndex]] = [this.grid[randomIndex], this.grid[i]];
    }
    return this.grid;
  }
  draw() {
    this.grid.forEach(row => {
      row.forEach(e => {
        if (e === undefined) {
          this.posX += 100;
          this.posXM -= 100;
        } else {
          e.drawSingle(this.posX, this.posY);
          e.drawSingle(this.posXM, this.posY);
          this.posX += 100;
          this.posXM -= 100;
        }
      });
      this.posX = 0;
      this.posY += 100;
      this.posXM = this.rowLength * 2 * 100 - 100;
    });
    this.posY = 0;
  }
}
