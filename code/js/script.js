let ctx = document.getElementById("canvas").getContext("2d");

function star() {
  console.log("star");
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.stroke();
  ctx.endPath();
}

star();
