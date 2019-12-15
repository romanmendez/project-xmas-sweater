class Grid {
  constructor(ctx, figures, patterns = []) {
    this.ctx = ctx;
    this.grid = [];
    this.figures = figures;
    this.patterns = patterns;

    this.posX = 0;
    this.posY = 0;
    this.rowLength = 5;
    this.columnLength = 7;
    this.blank = 20;
  }
  create() {
    for (let c = 0; c < this.columnLength; c++) {
      let row = [];
      for (let r = 0; r < this.rowLength; r++) {
        let randomFigure = Math.floor(Math.random() * (this.figures.length + this.blank));
        console.log(randomFigure);
        console.log(row);
        row.push(this.figures[randomFigure]);
      }
      this.grid.push(row);
    }
    console.log(this.grid);
  }
  draw() {
    this.grid.forEach(row => {
      row.forEach(e => {
        if (e === undefined) {
          this.posX += 100;
        } else {
          e.draw(this.posX, this.posY);
          this.posX += 100;
        }
      });
      this.posX = 0;
      this.posY += 100;
    });
  }
}
