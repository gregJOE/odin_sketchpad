function buildGrid(size) {
	var sketchPad = $("#container");

	var padSize = $("#container").height();
	var gridSquare = "<div class='gridSquare'></div>";

	var squareSize = padSize / size;
	console.log(squareSize);
	
	$(".gridSquare").remove();

	for (var squareCount = 0; squareCount < (size * size); squareCount++)
	{	
		sketchPad.append(gridSquare);
	}

	$(".gridSquare").width(squareSize);
	$(".gridSquare").height(squareSize);
}

function clearGrid() {

}
