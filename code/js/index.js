window.onload = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let clickX;
  let clickY;
  let width = 1000;
  let height = 700;
  let score = 0;

  canvas.width = width;
  canvas.height = height;

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

  let picket = new Figure(ctx, "picket2", "picket1");

  let figuresArr = [reindeer, darkStar, goat, anis, pitchfork, dinosaur, horns, tree, heart, ax, star, triangle];
  let patternArr = [picket1, picket2, picket3];

  let sweater = new Sweater(ctx, figuresArr, width, height);

  function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let width = rect.right - rect.left;
    let height = rect.bottom - rect.top;
    clickX = event.clientX - rect.left;
    clickY = event.clientY - rect.top;
    console.log("Coordinate x: " + clickX, "Coordinate y: " + clickY, "event x:", event.clientX, "event y:", event.clientY, "Rect L", rect.left, "Rect T", rect.top, "width:", width, "height:", height);
  }
  canvas.addEventListener("mousedown", e => {
    getMousePosition(canvas, e);
    clickX = sweater.rowLength * 2 - clickX;
    console.log("x", clickX);
    console.log(score);
    sweater.variations.some((e, i) => {
      let figureX = e[0];
      let figureY = e[1];
      if (clickX > figureX && clickX < figureX + 100 && clickY > figureY && clickY < figureY + 100) {
        sweater.variations.splice(i, 1);
        sweater.variationsNumber--;
        sweater.draw();
        return score++;
      }
    });
  });
  // ctx.scale(0.5, 0.5);
  sweater.createGrid();
  sweater.addVariation();
  console.log("grid", sweater.grid, "variations", sweater.variations, "blanks", sweater.blanks);
  sweater.draw();
};
