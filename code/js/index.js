window.onload = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let clickX;
  let clickY;
  let scale = 0.7;
  let width = 1000;
  let height = 700;
  let score = 0;
  let varIndex;
  let timeUni = document.getElementById("timeUni");
  let timeDec = document.getElementById("timeDec");
  let scoreUni = document.getElementById("scoreUni");
  let scoreDec = document.getElementById("scoreDec");
  let startButton = document.getElementById("start");
  let background = document.getElementById("background");
  let backgroundCtx = background.getContext("2d");

  canvas.width = width;
  canvas.height = height;
  background.width = 7;
  background.height = 7;

  let whiteBackground = new Background(backgroundCtx, 10, 10);
  whiteBackground.draw();

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
  let star2 = new Figure(ctx, "star2", width, height, background);
  let rhombus = new Figure(ctx, "rhombus", width, height, background);
  let triangle = new Figure(ctx, "triangle", width, height, background);
  let crown = new Figure(ctx, "crown", width, height, background);

  let figuresArr = [reindeer, darkStar, goat, anis, pitchfork, dinosaur, tree, heart, ax, star, rhombus, star2, crown, triangle];

  let sweater = new Sweater(ctx, figuresArr, width, height);
  let board = new Board(sweater);

  board.startTime(timeDec, timeUni);

  function getMousePosition(element, event) {
    let el = element.getBoundingClientRect();
    clickX = event.clientX - el.left;
    clickY = event.clientY - el.top;
  }
  function startGame() {
    board.clearTime();
    board.time = 60;
    board.score = 0;
    board.print(board.score, scoreDec, scoreUni);
    board.print(board.time, timeDec, timeUni);
    sweater.clear();
    sweater.createGrid();
    sweater.addVariation();
    sweater.draw();
    board.startTime(timeDec, timeUni);
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
      sweater.variations.splice(varIndex, 1);
      sweater.draw();
      board.score++;
      board.print(board.score, scoreDec, scoreUni);
    } else if (board.score > 0) {
      board.score--;
      board.print(board.score, scoreDec, scoreUni);
    } else if (board.score === 0) {
      board.clearTime();
      sweater.gameOver();
    }
    if (sweater.variations.length === 0) {
      startGame();
    }
  });
  startButton.addEventListener("click", () => {
    startGame();
  });

  startGame();
};
