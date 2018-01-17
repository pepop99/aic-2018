document.getElementsByClassName("menu")[0].addEventListener("click", function(){
	document.getElementsByClassName("hamburger")[0].style.left = "-10vw";
});

document.getElementsByClassName("arrow")[0].addEventListener("click", function(){
	document.getElementsByClassName("hamburger")[0].style.left = "-110vw";
});


document.getElementsByClassName("nav-rules")[0].addEventListener("click", function(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";

	setTimeout(function(){
		document.getElementsByClassName("rules-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	}, 500);	
});

document.getElementsByClassName("nav-contact")[0].addEventListener("click", function(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";

	setTimeout(function(){
		document.getElementsByClassName("contact-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	}, 500);	
});