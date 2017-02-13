let numberOfFaces  = 5;
let theLeftSide  = document.getElementById("leftSide");
let theRightSide  = document.getElementById("rightSide");
let count = 0;

function generateFaces() {
	for (i = 0; i < numberOfFaces; i++) {
		let imgTop = Math.floor(Math.random() * 401);
		let imgLeft = Math.floor(Math.random() * 401);
		let img = document.createElement("img");
		img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png"
		img.style.top = imgTop + "px";
		img.style.left = imgLeft + "px";
		img.style.height = "80px";
		theLeftSide.appendChild(img);
		let leftSideImgs = theLeftSide.cloneNode(true);
		leftSideImgs.removeChild(leftSideImgs.lastChild);
		rightSide.appendChild(leftSideImgs);
	}
	let theBody = document.getElementsByTagName("body")[0]; 
	let clickedFace = function nextLevel(e) {
        e.stopPropagation();
		while (theLeftSide.firstChild) {
			theLeftSide.removeChild(theLeftSide.firstChild);
		}
		while (theRightSide.firstChild) {
			theRightSide.removeChild(theRightSide.firstChild);
		}
        numberOfFaces += 5;
        count++;
        generateFaces();
	};

	theLeftSide.lastChild.onclick = clickedFace;

	let clickBody = function gameOver() {
	   	alert("Game Over! Sorry You Lost.\n\n Your score is " + count + " smileys.");
	    theBody.onclick = null;
	    theLeftSide.lastChild.onclick = null;
	};

	theBody.onclick = clickBody;
}