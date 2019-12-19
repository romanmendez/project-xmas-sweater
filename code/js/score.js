class ScoreBoard {
  constructor(ctx) {
    this.ctx = ctx;
  }
}
class Chronometer {
  constructor() {
    this.currentTime = 132907;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(
      function() {
        this.currentTime += 1;
      }.bind(this),
      10
    );
  }
  getMinutes() {
    var minutes = Math.floor(this.currentTime / 100 / 60);
    return minutes;
  }
  getSeconds() {
    var seconds = Math.floor(this.currentTime / 100) % 60;
    return seconds;
  }
}
