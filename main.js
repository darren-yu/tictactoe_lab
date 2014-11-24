document.addEventListener("DOMContentLoaded", function(){
	var turns = 0;
	var resetCounter = 0;
	var squares = document.getElementsByClassName('sq');
	var winArray = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];
	var resetButton = document.getElementById('reset');

	//the below adjust color of cells upon clicking
	var tableCells = document.querySelectorAll("#cell");

	for (var i = 0; i < tableCells.length; i++) {
		tableCells[i].addEventListener("click", function(){
			this.style.backgroundColor="lightskyblue";
		});

	};


	var winner = function() {
		for (var i = 0; i < winArray.length; i++) {
			if ((squares[winArray[i][0]].innerText !== "--") && 
			(squares[winArray[i][1]].innerText === squares[winArray[i][0]].innerText) &&
			(squares[winArray[i][2]].innerText === squares[winArray[i][0]].innerText)) {
				alert(squares[winArray[i][1]].innerText + " wins!");
				return squares[winArray[i][1]].innerText;
			}
		}
	};


	resetButton.addEventListener("click",function(){
	// document.getElementById('reset').addEventListener("click",function(){
		// // alert("resetting...");
		for(var i = 0; i < squares.length; i++) {
			squares[i].innerText = "--";
		}
		resetCounter += 1;
		for(var i = 0; i < tableCells.length; i++) {
			if (resetCounter % 2 === 0) {
				tableCells[i].style.backgroundColor="lime";
			}
			else {
				tableCells[i].style.backgroundColor="violet";
			}
		}
	});


	for (var i = 0; i < squares.length; i++ ) {
		// console.log(squares[i].innerText);
		squares[i].addEventListener("click",function(){
			// alert(this.innerText);
			if ((this.innerText === "X") || (this.innerText === "O")) {
				return;
			}
			turns += 1;
			if (turns % 2 === 0) {
				this.innerText = "X";
			}
			else {
				this.innerText = "O";
			}
			winner();
		});
	}
});



