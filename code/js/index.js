window.onload = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let clickX;
  let clickY;
  let scale = 0.5;
  let width = 1000 / scale;
  let height = 700 / scale;
  let score = 0;

  canvas.width = width;
  canvas.height = height;

  let reindeer = new Figure(ctx, "reindeer", width, height);
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

  let sweater = new Sweater(ctx, figuresArr, width, height);

  function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    clickX = event.clientX - rect.left;
    clickY = event.clientY - rect.top;
    console.log("Coordinate x: " + clickX, "Coordinate y: " + clickY, "event x:", event.clientX, "event y:", event.clientY, "Rect L", rect.left, "Rect T", rect.top, "width:", width, "height:", height);
  }
  canvas.addEventListener("mousedown", e => {
    getMousePosition(canvas, e);
    clickX = width * scale - clickX;
    console.log("x", clickX, "y", clickY);
    console.log(score);
    console.log(sweater.variations);
    sweater.variations.some((e, i) => {
      let figureX = e[0] * scale;
      let figureY = e[1] * scale;
      if (clickX > figureX && clickX < figureX + 100 * scale && clickY > figureY && clickY < figureY + 100 * scale) {
        let errased = sweater.variations.splice(i, 1);
        sweater.variationsNumber--;
        sweater.draw();
        console.log(errased);
        return score++;
      }
    });
  });
  ctx.scale(scale, scale);
  sweater.createGrid();
  sweater.addVariation();
  console.log("grid", sweater.grid, "variations", sweater.variations, "blanks", sweater.blanks);
  sweater.draw();
};
