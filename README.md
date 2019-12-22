# Fix The Sweater

Fix the Sweater is a puzzle game based on Holiday CSSweater Generator generator by Adam Kuhn (https://codepen.io/cobra_winfrey/pen/ZEYzMBj).

### Goal

The goal of the game is to find the mistakes in simatry on the right side of the sweater. There are 5 mistakes on every sweater. As soon as you find the 5, a new sweater pattern is generated with 5 new mistakes. Find as many mistakes as you can before the time is up.
https://romanmendez.github.io/project-xmas-sweater/

# Code

The patterns on the sweater and all the game logic is done in Javascript and painted into de canvas with the `getConext("2d")` method.

### Background

The document background and sweater canvas background are done with CSS, taken directly from the Holiday CSSweater Generator.

The figures background is done by created a small canvas element which has a hidden visibility on the DOM and is then used as a fillStyle when paiting the figures.

### Figures

The figures on the sweater are generated with polygon coordinates taken from Adam Kuhn's generator and transformed into arrays of X,Y coordinates that are painted one by one using a for loop.

For example, here is the star coordinates array:

`star: [50, 0, 61, 35, 98, 35, 68, 57, 79, 91, 50, 70, 21, 91, 32, 57, 2, 35, 39, 35]`

This array is draw using the draw method in the Figure class:

```
draw(sX, sY) {
    this.ctx.beginPath();
    this.ctx.moveTo(sX + this.figure[0], sY + this.figure[1]);
    for (let i = 0; i < this.figure.length; i += 2) {
      this.ctx.lineTo(sX + this.figure[i], sY + this.figure[i + 1]);
    }
    this.ctx.fillStyle = this.ctx.createPattern(this.background, "repeat");
    this.ctx.fill();
    this.ctx.closePath();
  }
```

# Sweater

The pattern is generated randomy every time the game is loaded or the 5 symatry mistakes are found.
