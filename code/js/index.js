window.onload = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  canvas.width = 1000;
  canvas.height = 700;

  function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let width = rect.right - rect.left;
    let height = rect.bottom - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y, "event x:", event.clientX, "event y:", event.clientY, "Rect L", rect.left, "Rect T", rect.top, "width:", width, "height:", height);
  }
  canvas.addEventListener("mousedown", e => getMousePosition(canvas, e));

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

  let grid = new Grid(ctx, figuresArr, patternArr);
  grid.create();
  grid.shuffle();
  grid.draw();
};
