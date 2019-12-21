# Fix The Sweater

Fix the Sweater is a puzzle game based on Holiday CSSweater Generator generator by Adam Kuhn (https://codepen.io/cobra_winfrey/pen/ZEYzMBj).

# Goal

The goal of the game if to find the mistakes in simatry on the right side of the sweater. Find as many mistakes as you can before the time is up.
https://romanmendez.github.io/project-xmas-sweater/

# Figures

The figures on the sweater are generated with polygon coordinates taken from Adam Kuhn's generator and transformed into arrays of X,Y coordinates that are painted with the lineTo property of Javascript canvas. The background fill in the figures is also created with an array of coordinates on a seperate hidden canvas and then used as a fillStyle for the figures.

# Sweater

The pattern is generated randomy every time the game is loaded or the 5 symatry mistakes are found.
