
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
// function hideSplash(){
// 	document.getElementById("splash").style.display="none";
// 	document.getElementById("main").style.justifyContent="flex-start";
// 	document.getElementById("piggy").src ="../files/icons/piggy_white.svg";
// 	document.getElementById("piggy").style.width="70px";
// 	document.getElementById("piggy").style.cursor="pointer";
// }

// function showSplash(){
// 	document.getElementById("splash").style.display="flex";
// 	document.getElementById("main").style.justifyContent="flex-end";
// 	document.getElementById("piggy").src ="../files/icons/heart.svg";
// 	document.getElementById("piggy").style.width="50px";
// 	document.getElementById("piggy").style.cursor="default";

// 	hideAllHeaders();
// 	deselectAll();
// }

///////////////////////fade in, fade out DIV sections///////////////

function hideAllHeaders(){
	document.getElementById("ABOUT").style.display = "none";
	document.getElementById("WORK").style.display = "none";
	document.getElementById("RESUME").style.display = "none";
	document.getElementById("CONTACT").style.display = "none";

	document.getElementById("ABOUT").style.opacity="0";
	document.getElementById("WORK").style.opacity="0";
	document.getElementById("RESUME").style.opacity="0";
	document.getElementById("CONTACT").style.opacity="0";
}

function toggleHeader(id){
	console.log(id);
	hideAllHeaders();

	document.getElementById(id).style.display="flex";
	setTimeout(function(){document.getElementById(id).style.opacity="1";}, 50);

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


///////////////////////Fade in, fade out NAV BAR///////////////////
//fade the nav bar only if global is true
var onSplashPage = true;

function selectNavHeader(id){
	//onSplashPage, fadeout navbar and pig
	if(onSplashPage==true){
		navFadeOut();
		onSplashPage = false;
		//set a timeout before opening up selected div?
		setTimeout(function(){toggleHeader(id);}, 500);
	}
	//else, directly open selected div
	else{
		toggleHeader(id);
	}
}


function navFadeOut(){
	//fade out nav bar and splash pig
	document.getElementById("navbar").style.height = "20%";
	document.getElementById("navbar").style.opacity = "0";
	document.getElementById("splash").style.opacity = "0";
	document.getElementById("homePigBullet").style.opacity = "0";

	//fade in nav bar to top
	setTimeout(function(){ navFadeIn(); }, 500);
	setTimeout(function(){heartToPig();}, 900);

}

function navFadeIn(){
	// document.getElementById("navbar").style.height = "20%";
	document.getElementById("navbar").style.opacity = "1";
	document.getElementById("navbar").style.height = "10%";
	document.getElementById("main").style.justifyContent="flex-start";
	document.getElementById("splash").style.display="none";

}

/////////////////splash page to nav bar transitions/////////////////

function heartToPig(){
	document.getElementById("homePigBullet").style.opacity = "1";
	document.getElementById("piggy").src ="../files/icons/piggy_white.svg";
	document.getElementById("piggy").style.width="70px";
	document.getElementById("piggy").style.cursor="pointer";

}

function pigToHeart(){
	document.getElementById("homePigBullet").style.opacity="0";
	setTimeout(function(){	
		document.getElementById("homePigBullet").style.opacity = "1";
		document.getElementById("piggy").src ="../files/icons/heart.svg";
		document.getElementById("piggy").style.width="50px";
		document.getElementById("piggy").style.cursor="default";},500);
}


function splashNavFadeOut(){
	//fade out nav bar
	document.getElementById("navbar").style.height = "20%";
	document.getElementById("navbar").style.opacity = "0";

	setTimeout(function(){splashNavFadeIn();},500);
}


function splashNavFadeIn(){
	//fade in nav bar, to bottom
	document.getElementById("navbar").style.opacity = "1";
	document.getElementById("navbar").style.height = "10%";
	document.getElementById("main").style.justifyContent="flex-end";

	document.getElementById("splash").style.display="flex";
	document.getElementById("splash").style.opacity="1";
}

function selectSplashPage(){
	if(onSplashPage==false){
		splashNavFadeOut();
		pigToHeart();
		hideAllHeaders();
		deselectAll();
		onSplashPage=true;
	}
}

///////////////////////////ABOUT page///////////////////////////////

function swapMe(){
	console.log(document.getElementById("about_pic_piggy").alt);

	var currentAlt = document.getElementById("about_pic_piggy").alt;
	if(currentAlt=="piggy"){
		document.getElementById("about_pic_piggy").src = "../files/images/me2_cropped.jpg"	
		document.getElementById("about_pic_piggy").alt = "me";
	}
	else{
		document.getElementById("about_pic_piggy").src = "../files/images/about_piggy_cropped.jpg"	
		document.getElementById("about_pic_piggy").alt = "piggy";
	}

}

///////////////////////WORK splash////////////////////////////////////


function showWorkSplash(){
	console.log("showWorkSplash called");
	document.getElementById("work_splash").style.display="flex";
	setTimeout(function(){document.getElementById("work_splash").style.opacity="1";},100);
	hideAllWork();
}

function hideWorkSplash(){
	document.getElementById("work_splash").style.opacity="0";
	setTimeout(function(){document.getElementById("work_splash").style.display="none";},100);
}


function hideAllWork(){
	document.getElementById("work_animation_div").style.display="none";
	document.getElementById("work_code_div").style.display="none";
	document.getElementById("work_painting_div").style.display="none";
	document.getElementById("work_design_div").style.display="none";
	document.getElementById("work_photography_div").style.display="none";

	document.getElementById("work_animation_div").style.opacity="0";
	document.getElementById("work_code_div").style.opacity="0";
	document.getElementById("work_painting_div").style.opacity="0";
	document.getElementById("work_design_div").style.opacity="0";
	document.getElementById("work_photography_div").style.opacity="0";
}

function toggleWork(id){
	console.log("toggleWork called");
	//hide splash page
	hideWorkSplash();

	//hide open work tabs, if any
	hideAllWork();

	//open target tab
	var target = id+'_div';
	console.log(target);
	document.getElementById(target).style.display="flex";
	setTimeout(function(){document.getElementById(target).style.opacity="1";},200);
}

///////////////////////WORK Div specific///////////////////////////////





