window.onload = () => {
  let background = document.getElementById("background");
  let backgroundCtx = background.getContext("2d");
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let timeUni = document.getElementById("timeUni");
  let timeDec = document.getElementById("timeDec");
  let scoreUni = document.getElementById("scoreUni");
  let scoreDec = document.getElementById("scoreDec");
  let startButton = document.getElementById("start");

  let scale = 0.7;
  let width = 1000;
  let height = 700;
  canvas.width = width;
  canvas.height = height;
  background.width = 7;
  background.height = 7;

  let reindeer = new Figure(ctx, "reindeer", width, height, background);
  let darkStar = new Figure(ctx, "darkStar", width, height, background);
  let goat = new Figure(ctx, "goat", width, height, background);
  let anis = new Figure(ctx, "anis", width, height, background);
  let pitchfork = new Figure(ctx, "pitchfork", width, height, background);
  let dinosaur = new Figure(ctx, "dinosaur", width, height, background);
  let tree = new Figure(ctx, "tree", width, height, background);
  let heart = new Figure(ctx, "heart", width, height, background);
  let ax = new Figure(ctx, "ax", width, height, background);
  let star = new Figure(ctx, "star", width, height, background);
  let star2 = new Figure(ctx, "star2", width, height, background);
  let rhombus = new Figure(ctx, "rhombus", width, height, background);
  let triangle = new Figure(ctx, "triangle", width, height, background);
  let crown = new Figure(ctx, "crown", width, height, background);

  let figuresArr = [reindeer, darkStar, goat, anis, pitchfork, dinosaur, tree, heart, ax, star, rhombus, star2, crown, triangle];

  let whiteBackground = new Background(backgroundCtx, 10, 10);
  let sweater = new Sweater(ctx, figuresArr, width, height);
  let board = new ScoreBoard(sweater);

  function getMousePosition(element, event) {
    let el = element.getBoundingClientRect();
    let clickX = event.clientX - el.left;
    let clickY = event.clientY - el.top;
    return { x: clickX, y: clickY };
  }
  function startGame() {
    board.clearTime();
    board.reset();
    board.print(board.score, scoreDec, scoreUni);
    board.print(board.time, timeDec, timeUni);
    board.startTime(timeDec, timeUni);
  }
  function newBoard() {
    sweater.clear();
    sweater.createGrid();
    sweater.addVariation();
    sweater.draw();
  }
  canvas.addEventListener("mousedown", e => {
    let clickPos = getMousePosition(wrap, e);
    let variationIndex;
    clickPos.x = width * scale - clickPos.x - 40;
    let isVariation = sweater.variations.some((e, i) => {
      let figureX = e[0] * scale;
      let figureY = e[1] * scale;
      variationIndex = i;
      return clickPos.x > figureX && clickPos.x < figureX + 100 * scale && clickPos.y > figureY && clickPos.y < figureY + 100 * scale;
    });
    if (isVariation) {
      sweater.variations.splice(variationIndex, 1);
      sweater.draw();
      board.score++;
      board.print(board.score, scoreDec, scoreUni);
    } else if (board.score > 0) {
      board.score--;
      board.print(board.score, scoreDec, scoreUni);
    } else if (board.score === 0 && board.intervalId === 1) {
      board.clearTime();
      board.resetTime();
      sweater.gameOver();
    }
    if (sweater.variations.length === 0 && board.intervalId === 1) {
      newBoard();
    }
  });
  startButton.addEventListener("click", () => {
    newBoard();
    startGame();
  });

  whiteBackground.draw();
  sweater.title(background);
};
