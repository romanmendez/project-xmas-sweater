window.onload = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  let reindeer = new Figure(ctx, "pitchfork", 20, 50);
  reindeer.draw();
};
