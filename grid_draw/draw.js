var rows = 8;
var columns = 8;

$(document).ready(function(){
	askGridDimensions();
	drawGrid();

	$(".square").mouseenter(function(){
		$(this).css('background', 'teal');
	});	
});

function askGridDimensions(){
	rows = +prompt('How many rows do you want?', rows, 'Grid Dimensions');

	columns = +prompt('How many columns do you want?', columns, 'Grid Dimensions');
}

function drawGrid(){	

	var squareWidth = 800 / columns;
	var squareHeight = 800 / rows;

	for(var i = 0; i < rows; i++){
		$("#wrapper").append($("<div />", {class: 'row', height: squareHeight.toString()}));
	}

	for(var i = 0; i < columns; i++){
		$(".row").append($("<div />", {class: 'square', width: squareWidth.toString(), height: squareHeight.toString()}));
	}
}
