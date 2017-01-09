// Modal Gallery
function onClick(modal_id) {
  // document.getElementById("img01").src = element.src;
  document.getElementById(modal_id).style.display = "block";
  // var captionText = document.getElementById("caption");
  // captionText.innerHTML = element.alt;
}

function closeModal(modal_id){
  document.getElementById(modal_id).style.display = "none";
}

// Modal Image Lightbox
function onClickLightbox(element) {
  document.getElementById("modal_lightbox_img").src = element.src;
  document.getElementById("modal_lightbox").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function closeModalLightbox(){
  document.getElementById("modal_lightbox").style.display = "none";
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
        document.getElementById("home_piggy").src = "files/icons/piggy_black.svg";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", " w3-text-white");
        document.getElementById("home_piggy").src = "files/icons/piggy_white.svg";
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Used to toggle gallery; show more or show less
function toggleGallery() {
    var x = document.getElementById("gallery_row3");
    if (x.className.indexOf("w3-show") == -1) {
        x.className = x.className.replace(" w3-hide", " w3-show");
        document.getElementById("gallery_button").innerHTML = "SHOW LESS";
    } else {
        x.className = x.className.replace(" w3-show", " w3-hide");
        document.getElementById("gallery_button").innerHTML = "SHOW MORE";
    }
}