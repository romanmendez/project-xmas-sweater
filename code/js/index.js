window.onload = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let clickX;
  let clickY;
  let zoom = 0.7;
  let scale = 1 * zoom;
  let width = 1000;
  let height = 700;
  let score = 0;
  let varIndex;
  let timeUni = document.getElementById("timeUni");
  let timeDec = document.getElementById("timeDec");
  let scoreUni = document.getElementById("scoreUni");
  let scoreDec = document.getElementById("scoreDec");
  let sweaters = document.getElementById("sweaters");

  let background = document.getElementById("background");
  let backgroundCtx = background.getContext("2d");
  background.width = 10;
  background.height = 10;

  let backgroundImg = new Background(backgroundCtx, 10, 10);
  backgroundImg.draw();

  canvas.width = width;
  canvas.height = height;

  let reindeer = new Figure(ctx, "reindeer", width, height, background);
  let darkStar = new Figure(ctx, "darkStar", width, height, background);
  let goat = new Figure(ctx, "goat", width, height, background);
  let anis = new Figure(ctx, "anis", width, height, background);
  let pitchfork = new Figure(ctx, "pitchfork", width, height, background);
  let dinosaur = new Figure(ctx, "dinosaur", width, height, background);
  let horns = new Figure(ctx, "horns", width, height, background);
  let tree = new Figure(ctx, "tree", width, height, background);
  let heart = new Figure(ctx, "heart", width, height, background);
  let ax = new Figure(ctx, "ax", width, height, background);
  let star = new Figure(ctx, "star", width, height, background);
  let triangle = new Figure(ctx, "triangle", width, height, background);

  let figuresArr = [reindeer, darkStar, goat, anis, pitchfork, dinosaur, horns, tree, heart, ax, star, triangle];

  let sweater = new Sweater(ctx, figuresArr, width, height);
  let board = new Board();

  board.startTime(timeDec, timeUni);
  board.print(board.sweaters, sweaters);

  function getMousePosition(element, event) {
    let el = element.getBoundingClientRect();
    clickX = event.clientX - el.left;
    clickY = event.clientY - el.top;
    console.log("clickX: " + clickX, "clickY: " + clickY, "eX:", event.clientX, "eY:", event.clientY, "element L", el.left, "element T", el.top, "width:", el.width, "height:", el.height);
  }
  canvas.addEventListener("mousedown", e => {
    getMousePosition(wrap, e);
    clickX = width * scale - clickX;
    let isVariation = sweater.variations.some((e, i) => {
      let figureX = e[0] * scale;
      let figureY = e[1] * scale;
      varIndex = i;
      return clickX > figureX && clickX < figureX + 100 * scale && clickY > figureY && clickY < figureY + 100 * scale;
    });
    if (isVariation) {
      let errased = sweater.variations.splice(varIndex, 1);
      sweater.variationsNumber--;
      sweater.draw();
      console.log(errased);
      board.score++;
      board.print(board.score, scoreDec, scoreUni);
    } else if (board.score > 0) {
      board.score--;
      board.print(board.score, scoreDec, scoreUni);
    }
  });
  // ctx.scale(scale, scale);
  sweater.createGrid();
  sweater.addVariation();
  console.log("grid", sweater.grid, "variations", sweater.variations, "blanks", sweater.blanks);
  sweater.draw();
};
