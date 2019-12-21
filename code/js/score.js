class Board {
  constructor(sweater) {
    this.intervalId;
    this.time = 30;
    this.score = 0;
    this.sweater = sweater;
  }
  startTime(dec, uni) {
    this.intervalId = setInterval(() => {
      if (this.time > 0) {
        this.time -= 1;
        this.print(this.time, dec, uni);
      } else {
        clearInterval(this.intervalId);
        this.sweater.timeUp(this.score);
      }
    }, 1000);
  }
  resetTime() {
    this.time = 10;
  }
  print(value, dec, uni = null) {
    if (uni === null) {
      dec.innerText = value;
    } else {
      if (value >= 0) {
        if (value < 10) {
          dec.innerText = "0";
          uni.innerText = value;
        } else {
          dec.innerText = Math.floor(value / 10);
          uni.innerText = value % 10;
        }
      }
    }
  }
  clearTime() {
    clearInterval(this.intervalId);
  }
}
