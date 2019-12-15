window.onload = () => {
  let canvas = document.getElementById("canvas0");
  let ctx = canvas.getContext("2d");

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

  let grid = new Grid(ctx, figuresArr, patternArr);
  grid.create();
  grid.shuffle();
  grid.draw();
};
