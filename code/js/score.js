class ScoreBoard {
  constructor(ctx) {
    this.ctx = ctx;
  }
}
class Timer {
  constructor() {
    this.intervalId;
    this.seconds = 10;
  }
  startClick(dec, uni) {
    this.intervalId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds -= 1;
        this.printSeconds(dec, uni);
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
  getSeconds() {
    this.seconds = Math.floor(this.currentTime / 100) % 60;
  }
  printSeconds(dec, uni) {
    if (this.seconds >= 0) {
      if (this.seconds < 10) {
        dec.innerText = "0";
        uni.innerText = this.seconds;
      } else {
        dec.innerText = Math.floor(this.seconds / 10);
        uni.innerText = this.seconds % 10;
      }
    }
  }
  resetTime() {
    this.currentTime = 0;
  }
}
