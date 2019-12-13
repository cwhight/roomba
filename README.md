# roomba
## Overview

A simple application written in node.js that returns the final position, and the number of patches of dirt cleaned, based on the following inputs.

● Room dimensions as X and Y coordinates, identifying the top right corner of the room
rectangle. This room is divided up in a grid based on these dimensions; a room that
has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover
positions. The bottom left corner is the point of origin for our coordinate system, so as
the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.

● Locations of patches of dirt, also defined by X and Y coordinates identifying the
bottom left corner of those grid positions.

● An initial hoover position (X and Y coordinates like patches of dirt)

● Driving instructions (as cardinal directions) where e.g. N and E mean "go north" and
"go east" respectively).

## Getting Started

If you do not already have a node.js environment set up follow these steps in your terminal:

### Linux

``` sudo apt-get install curl ```

``` curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - ```

Install

``` sudo apt-get install nodejs ```

Check Version 

```  node -v ```

``` npm -v ```

### Mac

[Follow the steps here for Mac](https://nodejs.org/en/download/)

## Running the application

To provide different inputs simply edit the content of 'input.txt' in the same directory as 'roomba.js'. Making sure to start with room dimensions (2 space seperated integers) followed on the next line by starting position (2 space seperated integers). 

When input is complete run the application from the terminal with command ``` node roomba.js ```
