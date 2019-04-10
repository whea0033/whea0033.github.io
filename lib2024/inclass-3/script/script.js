window.onload = init;

function init() {

	document.querySelectorAll('#show, #hide').onclick = showHideText;

	document.querySelectorAll('#small, #big').onclick = changeFont;
	
	document.querySelectorAll('#blue, #red').onclick = changeColor;

// I could not figure out how to make only 3 event listeners when there were 6 different classes and ids so I added a second class in the html.

	var text = document.getElementByClass('text')

	text.addEventListener("click");


	var font = document.getElementByClass('font')

	font.addEventListener("click");


	var color = document.getElementByClass('color')

	color.addEventListener("click");

}

function showHideText() {
	var content = document.querySelector('#content')
	}

function changeFont() {
	var content = document.querySelector('#content')
}	

function changeColor() {
	var content = document.querySelector('#content')
}


// I do not understand how to properly put the javascript code together. I think I would understand it if I 
// recieved the recommended readings after last weeks class, so that I had time to read and watch all the 
// videos before this weeks class. It is just not possible to do it in the short amount of time given. 
// Especially given the amount of other major assignments to be worked on including your final.

// When I validated the html code you gave us it has 2 errors and a fatal error. As we were told to use
// the code as given, I hope we will not lose marks for invalid code.