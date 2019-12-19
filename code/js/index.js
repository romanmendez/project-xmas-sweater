window.onload = () => {
  let canvas = document.getElementById("canvas");
  let wrap = document.getElementById("wrap");
  let ctx = canvas.getContext("2d");
  let clickX;
  let clickY;
  let zoom = 0.7;
  let scale = 1 * zoom;
  let width = 1000;
  let height = 700;
  let score = 0;
  let varIndex;

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

  function getMousePosition(element, event) {
    let el = element.getBoundingClientRect();
    clickX = event.pageX - el.left;
    clickY = event.pageY - el.top;
    console.log("clickX: " + clickX, "clickY: " + clickY, "eX:", event.clientX, "eY:", event.clientY, "element L", el.left, "element T", el.top, "width:", el.width, "height:", el.height);
  }
  canvas.addEventListener("mousedown", e => {
    getMousePosition(wrap, e);
    clickX = width * scale - clickX;
    console.log("x", clickX, "y", clickY);
    console.log(score);
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
      score++;
    } else if (score > 0) {
      score--;
    }
  });
  // ctx.scale(scale, scale);
  sweater.createGrid();
  sweater.addVariation();
  console.log("grid", sweater.grid, "variations", sweater.variations, "blanks", sweater.blanks);
  sweater.draw();
};
