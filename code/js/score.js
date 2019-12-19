class ScoreBoard {
  constructor(ctx) {
    this.ctx = ctx;
  }
}
class Chronometer {
  constructor() {
    this.currentTime = 10000;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => (this.currentTime -= 1), 10);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }
  resetTime() {
    this.currentTime = 0;
  }
}
