var turns = 0;






document.addEventListener("DOMContentLoaded", function(){
	var squares = document.getElementsByClassName('sq');
	for (var i = 0; i < squares.length; i++ ) {
		// console.log(squares[i].innerText);
		squares[i].addEventListener("click",function(){
			// alert(this.innerText);
			this.innerText
			turns += 1;
			if (turns % 2 === 0) {
				this.innerText = "X";
			}
			else {
				this.innerText = "O";
			}
			
		})
	}
	// document.addEventListener("click",)
	// console.log(sq);


});

