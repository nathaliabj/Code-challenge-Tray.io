
// ------------------- Variables -------------------
var input = [  // input values
  [5, 5],
  [0, 0],
  [1, 2],
  [1, 0],
  [2, 2]
];
var rowNumber = input[0][0];  // number of rows
var colNumber = input[0][1]; // number of columns

var canvasWidth = 900; // total width of the canvas
var canvasHeight = 600; // total height of the canvas

var gridWidth = canvasWidth/rowNumber; // 900 is the total width of the container and we are dividing it by the number of cells in the row
var gridHeight = canvasHeight/colNumber; // 600 is the total width of the container and we are dividing it by the number of cells in the column

var cleaned = 0; // setting up a variable to log the number of dirt patches that had been cleaned

var directions = { // variable with coordinates to give directions to the hoover
  N: 0,
  E: 0,
  S: gridHeight,
  W: gridWidth,
};

// ---------------- Container ---------------------

// Creates a div for the container which will be our canvas
$('body').append("<div id='container'></div>");
$('#container').width(canvasWidth).height(canvasHeight);

// ---------------- Button ---------------------

// Creates the button that gives the command to the hoover to clean
$('body').append("<button>Clean Up!</button>");

// -------------- Grid ----------------------

// Creates grid
function createGrid(x, y) { // with X and Y being the row and column numbers
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < y; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(gridWidth).height(gridHeight);
};

// --------------- Hoover --------------------------

// Creates the hoover
function createHoover(x, y) {
  var hoover = document.createElement("div");
  document.getElementById("container").appendChild(hoover);
  $(hoover).css("left" , x).css("bottom" , y).addClass("hoover").width(gridWidth).height(gridHeight);
  $(hoover).css({
    'position' : 'absolute',
  });
  $('.hoover').attr('id', 'hoover');
};

// ---------------- Dirt patches --------------------

// Creates the dirt patches
function createDirt(x, y) {
  var dirt = document.createElement("div");
  document.getElementById("container").appendChild(dirt);
  $(dirt).css("left" , x).css("bottom" , y).addClass("dirt").width(gridWidth).height(gridHeight);
  $(dirt).css({
    'position' : 'absolute',
  });
  $('.dirt').attr('id', function(i){
    return 'dirt'+(i+1);
  });
};

// ---------------- set up function --------------------

$(document).ready(function(){

  // set up variables
  var hoover = document.getElementById('hoover');
  var dirt1 = document.getElementById('dirt1');
  var dirt2 = document.getElementById('dirt2');
  var dirt3 = document.getElementById('dirt3');
  var hooverOffset = offset(hoover);
  var start = hooverOffset.left;

// Directions for the hoover on the y axis
  function directionsY(y) {
    $(".hoover").animate({"bottom": y }, "slow");
  }
// Directions for the hoover on the x axis
  function directionsX(x) {
    $(".hoover").animate({"left": x }, "slow");
  }

// function for when the button is clicked it gives the directions to the hoover
  $("button").on("click", function(e){
    directionsY(directions.S),
    directionsY(directions.S*2),
    directionsY(directions.S*3),
    directionsY(directions.S*4),
    directionsX(directions.W),
    directionsY(directions.S*3),
    directionsY(directions.S*2),
    directionsY(directions.S),
    directionsY(directions.N),
    directionsX(directions.W*2),
    directionsY(directions.S),
    directionsY(directions.S*2),
    directionsY(directions.S*3),
    directionsY(directions.S*4),
    directionsX(directions.W*3),
    directionsY(directions.S*3),
    directionsY(directions.S*2),
    directionsY(directions.S),
    directionsY(directions.N),
    directionsX(directions.W*4),
    directionsY(directions.S),
    directionsY(directions.S*2),
    directionsY(directions.S*3),
    directionsY(directions.S*4),
    directionsY(directions.N),
    // function to log the position of the hoover when the route is finished
    $(".hoover").animate({"left": directions.E }, "slow", function() {
        if( start === hooverOffset.left) {
        console.log("Starting Point");
      }
    });
  });
// ----------------- Clean up ---------------------

// function that checks the position of any element
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop, left: rect.left + scrollLeft
    }
  }
  // function that keeps checking the position of an element
  setInterval(function(){
    var hooverOffset = offset(hoover);
    var dirtOffset1 = offset(dirt1);
    var dirtOffset2 = offset(dirt2);
    var dirtOffset3 = offset(dirt3);

// if the hoover overlaps the dirt, clean the dirt and log it
    if (hooverOffset.left === dirtOffset1.left && hooverOffset.top === dirtOffset1.top) {
      document.getElementById('dirt1').style.display = 'none',
      cleaned++;
    }
    if (hooverOffset.left === dirtOffset2.left && hooverOffset.top === dirtOffset2.top) {
      document.getElementById('dirt2').style.display = 'none';
      cleaned++;
    }
    if (hooverOffset.left === dirtOffset3.left && hooverOffset.top === dirtOffset3.top) {
      document.getElementById('dirt3').style.display = 'none';
      cleaned++;
      console.log(cleaned);
    }
  });
});

// ------------------ Start Game -------------------

// function to creates the set up
function startApp() {
    createGrid(rowNumber, colNumber);
    createDirt(input[2][0]*gridWidth, input[2][1]*gridHeight);
    createDirt(input[3][0]*gridWidth, input[3][1]*gridHeight);
    createDirt(input[4][0]*gridWidth, input[4][1]*gridHeight);
    createHoover(input[1][0]*gridWidth, input[1][1]*gridHeight);
}
