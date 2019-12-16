window.onload = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let clickX;
  let clickY;
  let scale = 0.75;
  let score = 0;

  canvas.width = 1000;
  canvas.height = 700;

  let reindeer = new Figure(ctx, "reindeer");
  let picket1 = new Figure(ctx, "picket1");
  let picket2 = new Figure(ctx, "picket2");
  let picket3 = new Figure(ctx, "picket3");
  let darkStar = new Figure(ctx, "darkStar");
  let goat = new Figure(ctx, "goat");
  let anis = new Figure(ctx, "anis");
  let pitchfork = new Figure(ctx, "pitchfork");
  let dinosaur = new Figure(ctx, "dinosaur");
  let horns = new Figure(ctx, "horns");
  let tree = new Figure(ctx, "tree");
  let heart = new Figure(ctx, "heart");
  let ax = new Figure(ctx, "ax");
  let star = new Figure(ctx, "star");
  let triangle = new Figure(ctx, "triangle");

  let picket = new Figure(ctx, "picket2", "picket1");

  let figuresArr = [reindeer, darkStar, goat, anis, pitchfork, dinosaur, horns, tree, heart, ax, star, triangle];
  let patternArr = [picket1, picket2, picket3];

  let sweater = new Sweater(ctx, figuresArr, patternArr);

  function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let width = rect.right - rect.left;
    let height = rect.bottom - rect.top;
    clickX = event.clientX - rect.left * 0.75;
    clickY = event.clientY - rect.top * 0.75;
    console.log("Coordinate x: " + clickX, "Coordinate y: " + clickY, "event x:", event.clientX, "event y:", event.clientY, "Rect L", rect.left, "Rect T", rect.top, "width:", width, "height:", height);
  }
  canvas.addEventListener("mousedown", e => {
    getMousePosition(canvas, e);

    sweater.variations.some(function(e, i) {
      let figureX = e[0] * scale;
      let figureY = e[1] * scale;
      if (clickX > figureX && clickX < figureX + 100 && clickY > figureY && clickY < figureY + 100) {
        score++;
        sweater.variations.splice(i, 1);
        sweater.draw();
        console.log("variations array", sweater.variations);
        console.log("figureX", figureX, "figureY", figureY);
        console.log("score", score);
      }
    });
  });

  sweater.create();
  sweater.shuffle();
  sweater.draw();
  sweater.variation();
};
