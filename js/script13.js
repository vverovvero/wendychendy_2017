
//////////////////////BACKGROUND COLOR CHANGES///////////////////

// 20 colors total (0 - 19)
colorList = [
	"rgb(255,178,255)",
	"rgb(255,151,192)",
	"rgb(193,151,206)",
	"rgb(93,129,199)",
	"rgb(104,162,198)",
	"rgb(195,41,63)",
	"rgb(125,171,130)",
	"rgb(190,172,108)",
	"rgb(240,149,79)",
	"rgb(240,165,134)",
	"rgb(240,148,156)",
	"rgb(169,145,184)",
	"rgb(153,218,192)",
	"rgb(57,150,150)",
	"rgb(225,207,101)",
	"rgb(225,75,70)",
	"rgb(177,180,240)",
	"rgb(225,116,102)",
	"rgb(164,151,252)",
	"rgb(81,155,234)",
]

function randomColor(){
	console.log("randomColor called!");
	//get index 1 - 20
	var index = Math.ceil((Math.random() * 20))
	console.log(index);
	var n = index.toString();
	var target = 'url("../files/backgrounds/bg'+n+'.svg")';
	console.log(target);
	document.getElementById("body").style.backgroundImage = target;
	// document.getElementById("body").style.animation="none";

}


function randomColorAnimated(){
	randomColor();
	document.getElementById("body").style.animation="animatedBackground 40s linear infinite";
}

function setLightBoxText(){
	var index = Math.floor((Math.random() * 20));
	var color = colorList[index];
	document.getElementById("lightbox_nav_section").style.color= color;

	var list = document.querySelectorAll(".caption");
	// console.log(list);
	var last = list.length;
	// console.log(last);

	if(last != 0){
		var i;
		for(i=0;i<last;i++){
			list[i].style.color = color;
			// console.log(list[i]);

		}
	}

	var iconIndex = index +1;
	setLightBoxIcons(iconIndex);

}

//given index, which is a number
function setLightBoxIcons(index){
	var num = index.toString();

	var exit_target = "../files/icons/lightbox/exit"+num+".svg";
	var left_target = "../files/icons/lightbox/arrow_left"+num+".svg";
	var right_target = "../files/icons/lightbox/arrow_right"+num+".svg";

	document.getElementById("exit_icon").src=exit_target;
	document.getElementById("left_arrow_svg").src = left_target;
	document.getElementById("right_arrow_svg").src = right_target;
}

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
var workBg = "";

function turnOffBg(){
	workBg = document.getElementById("body").style.backgroundImage;
	document.getElementById("body").style.backgroundImage = "";
}


function turnOnBg(){
	document.getElementById("body").style.backgroundImage = workBg;	
}

//given a div
function openLightBox(target){
	document.getElementById("main").style.display="none";
	document.getElementById("main").style.opacity="0";
	document.getElementById("lightbox").style.display="flex";
	setTimeout(function(){document.getElementById("lightbox").style.opacity="1";}, 50);

	turnOffBg();
	setLightBoxText();

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

	turnOnBg();

	setTimeout(function(){sizeImages();},100);
}

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

//show selected gallery also sets global variables
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
		globalSection = "animation03";
	}
	else if(str.match(/code01/g) != null){
		res = str.replace("code01_gallery_", "");
		base = "code01_lightbox_";
		globalSection = "code01";
	}
	else if(str.match(/code02/g) != null){
		res = str.replace("code02_gallery_", "");
		base = "code02_lightbox_";
		globalSection = "code02";
	}
	else if(str.match(/code03/g) != null){
		res = str.replace("code03_gallery_", "");
		base = "code03_lightbox_";
		globalSection = "code03";
	}
	else if(str.match(/painting01/g) != null){
		res = str.replace("painting01_gallery_", "");
		base = "painting01_lightbox_";
		globalSection = "painting01";
	}
	else if(str.match(/painting02/g) != null){
		res = str.replace("painting02_gallery_", "");
		base = "painting02_lightbox_";
		globalSection = "painting02";
	}
	else if(str.match(/design01/g) != null){
		res = str.replace("design01_gallery_", "");
		base = "design01_lightbox_";
		globalSection = "design01";
	}
	else if(str.match(/design02/g) != null){
		res = str.replace("design02_gallery_", "");
		base = "design02_lightbox_";
		globalSection = "design02";
	}
	else if(str.match(/photography01/g) != null){
		res = str.replace("photography01_gallery_", "");
		base = "photography01_lightbox_";
		globalSection = "photography01";
	}

	// console.log(res);
	var index = Number(res);
	globalIndex = index;
	// console.log(index);

	//get target name
	var newTarget = base + res;
	// console.log('newTarget: '+newTarget);

	document.getElementById(newTarget).style.display = "block";

	//update imageNumber
	updateNumber(res, target);


}


function updateNumber(number, target){
	var str = target;
	var total = "";


	if(str.match(/animation03/g) != null){
		total = number+"/9"
	}
	else if(str.match(/code01/g) != null){
		total = number+"/13"
	}
	else if(str.match(/code02/g) != null){
		total = number+"/20"
	}
	else if(str.match(/code03/g) != null){
		total = number+"/26"
	}
	else if(str.match(/painting01/g) != null){
		total = number+"/13"
	}
	else if(str.match(/painting02/g) != null){
		total = number+"/5"
	}
	else if(str.match(/design01/g) != null){
		total = number+"/12"
	}
	else if(str.match(/design02/g) != null){
		total = number+"/6"
	}
	else if(str.match(/photography01/g) != null){
		total = number+"/21"
	}

	document.getElementById("imageNumber").innerHTML = total;

}

//////////////////////global arrows need global variables////////

//section: animation03, code01, code02, code03, painting01, painting02, 
//			design01, design02, photography01
//index (in form of number), not string 

//animation03: 9 items
//code01: 13 items
//code02: 20 items? (desktop and mobile mockups)
//code03: 26 items
//painting01: 13 items
//painting02: 5 items
//design01: 12 items
//design02: 6 items
//photography01: 21 items

var globalSection; //this is a string
var globalIndex; //this is a number

function goLeft(){
	console.log(globalSection, globalIndex);

	//get next index
	var index = globalIndex - 1;

	//get max index
	var max = getMax(globalSection);
	console.log(max);

	//check if next index is between min and max index
	if(index >= 1 && index <= max){
		//hide all
		hideAllImages();

		//get next target
		var num = index.toString()
		var target = globalSection + "_lightbox_" + num;
		console.log(target);

		document.getElementById(target).style.display = "block";

		//update number
		updateNumber(num, globalSection);


		//update globalIndex
		globalIndex = index;
	}


}

function goRight(){
	console.log(globalSection, globalIndex);

	//get next index
	var index = globalIndex + 1;

	//get max index
	var max = getMax(globalSection);
	console.log(max);

	//check if next index is between min and max index
	if(index >= 1 && index <= max){
		//hide all
		hideAllImages();

		//get next target
		var num = index.toString()
		var target = globalSection + "_lightbox_" + num;
		console.log(target);

		document.getElementById(target).style.display = "block";

		//update number
		updateNumber(num, globalSection);


		//update globalIndex
		globalIndex = index;
	}

}

function getMax(section){
	//get max index
	var max;
	if(section.match(/animation03/g) != null){
		max = 9;
	}
	else if(section.match(/code01/g) != null){
		max = 13;
	}
	else if(section.match(/code02/g) != null){
		max = 20;
	}
	else if(section.match(/code03/g) != null){
		max = 26;
	}
	else if(section.match(/painting01/g) != null){
		max = 13;
	}
	else if(section.match(/painting02/g) != null){
		max = 5;
	}
	else if(section.match(/design01/g) != null){
		max = 12;
	}
	else if(section.match(/design02/g) != null){
		max = 6;
	}
	else if(section.match(/photography01/g) != null){
		max = 21;
	}

	return max;
}










