let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function() {
	let popupClick = document.querySelector("#popup");
	let blackClick = document.querySelector("#black");
	let rainbowClick = document.querySelector("#rainbow");
	let resetClick = document.querySelector("#reset");
	popupClick.addEventListener("click", function() {
		let size = getSize();
		createBoard(size);
	});
	blackClick.addEventListener("click", function() {
		setColor("black");
	});
	rainbowClick.addEventListener("click", function() {
		setColor("rainbow");
	});
	resetClick.addEventListener("click", function() {
		resetBoard();
	});
	document.querySelector("body").addEventListener("mousedown", function(e) {
		if (e.target.tagName != "BUTTON") {
			click = true;
		}
	});
	document.querySelector("body").addEventListener("mouseup", function () {
		click = false;
	})
})

function createBoard(size) {
	let board = document.querySelector(".container");
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let numDivs = size * size;

	for(let i = 0; i < numDivs; i++) {
		let div = document.createElement("div");
		div.addEventListener("mouseover", colorDiv);
		board.insertAdjacentElement("beforeend", div);
	}
}

function getSize() {
	let input = prompt("Enter board size:");
	let message = document.querySelector("#message");
	if (input == ""){
		message.innerHTML = "Please input a number";
	}
	else if (input < 0 || input > 100) {
		message.innerHTML = "Provide a number between 1 and 100";
	}
	else {
		message.innerHTML = "You can now draw!";
		return input;
	}
}

function colorDiv() {
	if (click) {
		if (color == "rainbow") {
			this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
		}
		else if (color == "black") {
			this.style.backgroundColor = "black";
		}
	}
}

function setColor(colorChoice) {
	color = colorChoice;
}

function resetBoard() {
	let divs = document.querySelectorAll("div");
	divs.forEach((div) => div.style.backgroundColor = "white");
}