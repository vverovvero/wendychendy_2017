
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

/////////////////////Work drop down///////////////////////////////////

function toggleClassDropDown(){
	if(onSplashPage==true){
		document.getElementById("work_dropdown").className = "hideDrop";
	}
	if(onSplashPage==false){
		document.getElementById("work_dropdown").className = "showDrop";
	}
}


function selectDropDown(id){
	console.log("select dropdown called");
	//hide splash page
	hideWorkSplash();

	//hide open work tabs, if any
	hideAllWork();

	//open target tab
	var target = id;
	console.log(target);

	if(target == "dropdown01"){
		document.getElementById("work_animation_div").style.display="flex";
		setTimeout(function(){document.getElementById("work_animation_div").style.opacity="1";},200);
	}
	else if(target == "dropdown02"){
		document.getElementById("work_code_div").style.display="flex";
		setTimeout(function(){document.getElementById("work_code_div").style.opacity="1";},200);
	}
	else if(target == "dropdown03"){
		document.getElementById("work_painting_div").style.display="flex";
		setTimeout(function(){document.getElementById("work_painting_div").style.opacity="1";},200);
	}
	else if(target == "dropdown04"){
		document.getElementById("work_design_div").style.display="flex";
		setTimeout(function(){document.getElementById("work_design_div").style.opacity="1";},200);
	}
	else if(target == "dropdown05"){
		document.getElementById("work_photography_div").style.display="flex";
		setTimeout(function(){document.getElementById("work_photography_div").style.opacity="1";},200);
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
//classes to check for: animationProject, codeProject, paintingProject,
//designProject, photographyProject

//target is the div.  use target.class and target.id 
function hideAllProjects(target){
	// console.log(target);
	// console.log(target.id);
	// console.log(target.className);
	var lastIndex;
	var base;
	if(target.className=="project animationProject"){
		lastIndex = 4;
		base = "animation";
	}
	if(target.className=="project codeProject"){
		lastIndex = 3;
		base = "code";
	}
	if(target.className=="project paintingProject"){
		lastIndex = 2;
		base = "painting";
	}
	if(target.className=="project designProject"){
		lastIndex = 2;
		base = "design";
	}
	if(target.className=="project photographyProject"){
		lastIndex = 1;
		base = "photography";
	}
	// console.log(lastIndex);


	var i;
	for(i=1;i<lastIndex+1;i++){
		var targetGallery = base + '0' + i + '_gallery';
		var targetDescription = base + '0' + i + '_description';
		var targetHeader = base + '0' + i;
		// console.log(targetGallery, targetDescription);
		document.getElementById(targetGallery).style.display="none";
		document.getElementById(targetGallery).style.opacity="0";
		document.getElementById(targetDescription).style.display="none";
		document.getElementById(targetDescription).style.opacity="0";
		document.getElementById(targetHeader).style.textDecoration = "none";
	}
}


function selectProject(target){
	//hideallprojects first
	hideAllProjects(target);

	//specific target
	var targetGallery = target.id + '_gallery';
	var targetDescription = target.id + '_description';

	console.log(targetGallery, targetDescription);
	document.getElementById(targetGallery).style.display="flex";
	document.getElementById(targetGallery).style.opacity="1";
	document.getElementById(targetDescription).style.display="flex";
	document.getElementById(targetDescription).style.opacity="1";

	//underline target
	document.getElementById(target.id).style.textDecoration = "underline";

}


function sizeImages(){
	var h = document.getElementById("body").clientHeight;
	// console.log(h);

	var imageHeight = h * .6;
	// console.log(imageHeight);

	var list = document.querySelectorAll(".projectImage");
	// console.log(list);
	var last = list.length;
	// console.log(last);

	if(last != 0){
		var i;
		for(i=0;i<last;i++){
			list[i].style.height = imageHeight;
			// console.log(list[i]);

		}
	}

	//resize lightbox images too
	var h2 = document.getElementById("body").clientHeight;
	console.log(h2);

	var imageHeight2 = h2 * .67;
	console.log(imageHeight2);

	var list2 = document.querySelectorAll(".lightbox_image");
	// console.log(list);
	var last2 = list2.length;
	// console.log(last);

	if(last2 != 0){
		var j;
		for(j=0;j<last;j++){
			list2[j].style.height = imageHeight2;
			// console.log(list[i]);

		}
	}
	
}


function resizeImages(){
	var h = document.getElementById("WORK").clientHeight;
	// console.log(h);

	var imageHeight = h * .65;
	// console.log(imageHeight);

	var list = document.querySelectorAll(".projectImage");
	// console.log(list);
	var last = list.length;
	// console.log(last);

	if(last != 0){
		var i;
		for(i=0;i<last;i++){
			list[i].style.height = imageHeight;
			// console.log(list[i]);

		}
	}

	//resize lightbox images too
	var h2 = document.getElementById("lightbox_section").clientHeight;
	console.log(h2);

	var imageHeight2 = h2 * .85;
	console.log(imageHeight2);

	var list2 = document.querySelectorAll(".lightbox_image");
	// console.log(list);
	var last2 = list2.length;
	// console.log(last);

	if(last2 != 0){
		var j;
		for(j=0;j<last;j++){
			list2[j].style.height = imageHeight2;
			// console.log(list[i]);

		}
	}
	
}

///////////////////////LIGHT BOX FUNCTIONS/////////////////////////

//given a div
function openLightBox(target){
	document.getElementById("main").style.display="none";
	document.getElementById("main").style.opacity="0";
	document.getElementById("lightbox").style.display="flex";
	setTimeout(function(){document.getElementById("lightbox").style.opacity="1";}, 50);

	//first hide all galleries and images
	hideAllGallery();
	// hideAllImages();

	//show selected gallery
	showSelectedGallery(target);

	//sizeimages
	setTimeout(function(){sizeImages();},50);
}


function closeLightBox(){
	document.getElementById("lightbox").style.opacity="0";
	setTimeout(function(){document.getElementById("lightbox").style.display="none";}, 100);
	document.getElementById("main").style.display="flex";
	setTimeout(function(){document.getElementById("main").style.opacity="1";}, 100);

	setTimeout(function(){sizeImages();},100);
}


//animation03: 9 items
//code01: 13 items
//code02: 20 items? (desktop and mobile mockups)
//code03: 26 items
//painting01: 13 items
//painting02: 5 items
//design01: 12 items
//design02: 6 items
//photography01: 21 items


function hideAllGallery(){
	var list = document.querySelectorAll(".lightbox_gallery");
	// console.log(list);
	var last = list.length;
	// console.log(last);

	if(last != 0){
		var i;
		for(i=0;i<last;i++){
			list[i].style.display = "none";
			// console.log(list[i]);

		}
	}
}

function hideAllImages(){
	var list = document.querySelectorAll(".imageCaptionPair");
	// console.log(list);
	var last = list.length;
	// console.log(last);

	if(last != 0){
		var i;
		for(i=0;i<last;i++){
			list[i].style.display = "none";
			// console.log(list[i]);

		}
	}
}

function showSelectedGallery(targetID){
	console.log("showSelectedGallery: "+ targetID.id);
	var str = targetID.id;

	if(str.match(/animation03/g) != null){
		console.log("showing animation03_lightbox");
		document.getElementById("animation03_lightbox").style.display="flex";
	}
	else if(str.match(/code01/g) != null){
		console.log("showing code01_lightbox");
		document.getElementById("code01_lightbox").style.display="flex";
	}
	else if(str.match(/code02/g) != null){
		console.log("showing code02_lightbox");
		document.getElementById("code02_lightbox").style.display="flex";
	}
	else if(str.match(/code03/g) != null){
		console.log("showing code03_lightbox");
		document.getElementById("code03_lightbox").style.display="flex";
	}
	else if(str.match(/painting01/g) != null){
		console.log("showing painting01_lightbox");
		document.getElementById("painting01_lightbox").style.display="flex";
	}
	else if(str.match(/painting02/g) != null){
		console.log("showing painting02_lightbox");
		document.getElementById("painting02_lightbox").style.display="flex";
	}
	else if(str.match(/design01/g) != null){
		console.log("showing design01_lightbox");
		document.getElementById("design01_lightbox").style.display="flex";
	}
	else if(str.match(/design02/g) != null){
		console.log("showing design02_lightbox");
		document.getElementById("design02_lightbox").style.display="flex";
	}
	else if(str.match(/photography01/g) != null){
		console.log("showing photography01_lightbox");
		document.getElementById("photography01_lightbox").style.display="flex";
	}

	showSelectedImage(str);
}


function showSelectedImage(target){
	//first hide all images
	hideAllImages();

	//get correctly selected image
	var str = target;
	var res = "";
	var base = "";

	if(str.match(/animation03/g) != null){
		res = str.replace("animation03_gallery_", "");
		base = "animation03_lightbox_";
	}
	else if(str.match(/code01/g) != null){
		res = str.replace("code01_gallery_", "");
		base = "code01_lightbox_";
	}
	else if(str.match(/code02/g) != null){
		res = str.replace("code02_gallery_", "");
		base = "code02_lightbox_";
	}
	else if(str.match(/code03/g) != null){
		res = str.replace("code03_gallery_", "");
		base = "code03_lightbox_";
	}
	else if(str.match(/painting01/g) != null){
		res = str.replace("painting01_gallery_", "");
		base = "painting01_lightbox_";
	}
	else if(str.match(/painting02/g) != null){
		res = str.replace("painting02_gallery_", "");
		base = "painting02_lightbox_";
	}
	else if(str.match(/design01/g) != null){
		res = str.replace("design01_gallery_", "");
		base = "design01_lightbox_";
	}
	else if(str.match(/design02/g) != null){
		res = str.replace("design02_gallery_", "");
		base = "design02_lightbox_";
	}
	else if(str.match(/photography01/g) != null){
		res = str.replace("photography01_gallery_", "");
		base = "photography01_lightbox_";
	}

	console.log(res);
	var index = Number(res);
	console.log(index);

	//get target name
	var newTarget = base + res;
	console.log('newTarget: '+newTarget);

	document.getElementById(newTarget).style.display = "block";



}

