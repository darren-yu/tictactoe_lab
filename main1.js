// the below loads the page like DOMContentLoaded
$(function(){
	// alert("im loading the main page");
	var turns = 0;
	var checkWinner = false;
	var resetCounter = 0;
	var squares = $(".sq");
	var winArray = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];

	var winner = function() {
		for (var i = 0; i < winArray.length; i++) {
			if ((squares[winArray[i][0]].innerText !== "--") && 
			(squares[winArray[i][1]].innerText === squares[winArray[i][0]].innerText) &&
			(squares[winArray[i][2]].innerText === squares[winArray[i][0]].innerText)) {
				checkWinner = true;
				alert(squares[winArray[i][1]].innerText + " wins!");
				$(".win").fadeIn("slow");
				return;
			}
		}
	};

	$(".win").hide();

	squares.click(function(){
		if (checkWinner) {
			alert("There is a Winner, click reset for new game.");	
			return;
		}
		if (($(this).children("span").html() === "X") || ($(this).children("span").html() === "O")) {
			return;
		}
		turns += 1;
		if (turns % 2 === 0) {
			$(this).children("span").hide().fadeIn("slow").html("X");
		}
		else {
			$(this).children("span").hide().fadeIn("slow").html("O");
		}
		this.style.backgroundColor="lightskyblue";
		winner();

	});


	$("#reset").click(function(){
		$("table").hide().fadeIn("slow");
		resetCounter +=1;
		$(".sq span").html("--")
		if (resetCounter % 2 === 0) {
			squares.css("background-color","lime");
		}
		else {
			squares.css("background-color","violet");
		}
		$(".win").hide();
		checkWinner = false;

	});
});

