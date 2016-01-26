
//////////////////////BACKGROUND COLOR CHANGES///////////////////

// 20 colors total (0 - 19)
colorList = [
	"rgb(252, 94, 114)",
	"rgb(255,198,30)",
	"rgb(249,96,58)",
	"rgb(252,140,153)",
	"rgb(237,40,147)",
	"rgb(191,147,204)",
	"rgb(81,191,226)",
	"rgb(0,163,221)",
	"rgb(86,214,201)",
	"rgb(0,201,147)",
	"rgb(255,147,56)",
	"rgb(255,127,30)",
	"rgb(252,7,79)",
	"rgb(252,35,102)",
	"rgb(255,114,71)",
	"rgb(0,181,155)",
	"rgb(189,217,30)",
	"rgb(156,204,61)",
	"rgb(144,219,96)",
	"rgb(132,217,138)",
	"rgb(240,84,112)",
	"rgb(190,240,84)",
	"rgb(134,84,240)",
	"rgb(84,240,212)",
	"rgb(246,143,255)",
]

function randomColor(){
	// console.log("randomColor called!");
	// var index = Math.floor((Math.random() * 25))
	// document.getElementById("body").style.background = colorList[index];
	// console.log(colorList[index]);
}


//hide splash, change "main" to flex-start justified-content, and change heart icon to pig
function hideSplash(){
	document.getElementById("splash").style.display="none";
	document.getElementById("main").style.justifyContent="flex-start";
	document.getElementById("piggy").src ="../files/icons/piggy_white.svg";
	document.getElementById("piggy").style.width="70px";
	document.getElementById("piggy").style.cursor="pointer";
}

function showSplash(){
	document.getElementById("splash").style.display="flex";
	document.getElementById("main").style.justifyContent="flex-end";
	document.getElementById("piggy").src ="../files/icons/heart.svg";
	document.getElementById("piggy").style.width="50px";
	document.getElementById("piggy").style.cursor="default";

	hideAllHeaders();
	deselectAll();
}

function hideAllHeaders(){
	document.getElementById("ABOUT").style.display = "none";
	document.getElementById("WORK").style.display = "none";
	document.getElementById("RESUME").style.display = "none";
	document.getElementById("CONTACT").style.display = "none";
}

function toggleHeader(id){
	console.log(id);
	hideAllHeaders();
	document.getElementById(id).style.display="flex";
}


function deselectAll(){
	document.getElementById("header01").style.textDecoration = "none";
	document.getElementById("header02").style.textDecoration = "none";
	document.getElementById("header03").style.textDecoration = "none";
	document.getElementById("header04").style.textDecoration = "none";

}

function underlineSelection(id){
	console.log(id);
	deselectAll();
	document.getElementById(id).style.textDecoration="underline";

}
