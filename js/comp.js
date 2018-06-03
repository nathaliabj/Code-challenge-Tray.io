
// ------------------ Variables -------------------

var dirt;
var hoover;

var w = 900; // total width of the canvas
var h = 600; // total height of the canvas

var cellWidth = 900/5; // total width of the canvas divided by the number of cells in a row
var cellHeight = 600/5; // total height of the canvas divided by the number of cells in a column

var input = [ // input values
  [5, 5],
  [0, 0],
  [4, 1],
  [1, 2],
  [3, 4]
];

// ------------------ Start Game -------------------

// function to creates the set up
function startApp() {
    appArea.start();
    drawGrid(w, h);
    dirt = new component(cellWidth, cellHeight, "brown", input[2][0], input[2][1]);
    dirt = new component(cellWidth, cellHeight, "brown", input[3][0], input[3][1]);
    dirt = new component(cellWidth, cellHeight, "brown", input[4][0], input[4][1]);
    hoover = new component(cellWidth, cellHeight, "black", input[1][0], input[1][1]);
}

// ------------------ Canvas -------------------

// Function that creates the canvas
var appArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
}

// ------------------ Grid -------------------

// function to create the Grid
function drawGrid(w, h) {
    var ctx = appArea.context;
    ctx.canvas.width = w;
    ctx.canvas.height = h;

    for (x = 0; x <= w; x += cellWidth) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        for (y = 0; y <= h; y += cellHeight) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
        }
    }
    ctx.stroke();
}

// ------------------ Component -------------------

// function to create the new components ( dirt and hoover )
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = cellWidth*x;
    this.y = cellHeight*y;
    ctx = appArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function(){
        ctx = appArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// function to make the hoover move
function updateGameArea() {
    //appArea.clear();
    hoover.x += 1;
    hoover.update();
}
