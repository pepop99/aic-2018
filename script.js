function hamClose(){
	document.getElementsByClassName("hamburger")[0].style.left = "-110vw";
}

function hamOpen(){
	document.getElementsByClassName("hamburger")[0].style.left = "-10vw";
}

document.getElementsByClassName("menu")[0].addEventListener("click", hamOpen);
document.getElementsByClassName("arrow")[0].addEventListener("click", hamClose);

function rulesClick(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("faq-body")[0].style.left = "100vw";
	document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = "78vh";

	setTimeout(function(){
		document.getElementsByClassName("rules-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = "78vh";
	}, 500);	
}

function contactClick(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	document.getElementsByClassName("faq-body")[0].style.left = "100vw";
	document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = "78vh";

	setTimeout(function(){
		document.getElementsByClassName("contact-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = "78vh";
	}, 500);	
}

function overviewClick(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	document.getElementsByClassName("faq-body")[0].style.left = "100vw";
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = "78vh";

	setTimeout(function(){
		document.getElementsByClassName("overview-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = "78vh";
	}, 500);	
}

function homeClick(){
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	document.getElementsByClassName("faq-body")[0].style.left = "100vw";
	document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = "78vh";

	setTimeout(function(){
		document.getElementsByClassName("home-body")[0].style.left = "0vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = "78vh";
	}, 500);	
}

function faqClick(){
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = "78vh";

	setTimeout(function(){
		document.getElementsByClassName("faq-body")[0].style.left = "0vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = "78vh";
	}, 500);	
}

function problemClick(){
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		
	document.getElementsByClassName("bot-nav")[0].style.top = "100vh";

	setTimeout(function(){
		document.getElementsByClassName("problem-body")[0].style.left = "0vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("faq-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = "100vh";
	}, 500);	
}

var c=0;
function registerClick(){
	document.getElementsByClassName("register")[0].style.top = "0vh";
	c++;
}

function registerClose(){
	if(c==1)
	{
		document.getElementsByClassName("register")[0].style.top = "100vh";
		c=0;
	}
}
document.getElementsByClassName("nav-rules")[0].addEventListener("click", rulesClick);
document.getElementsByClassName("nav-contact")[0].addEventListener("click", contactClick);
document.getElementsByClassName("nav-overview")[0].addEventListener("click", overviewClick);
document.getElementsByClassName("nav-home")[0].addEventListener("click", homeClick);
document.getElementsByClassName("nav-faq")[0].addEventListener("click", faqClick);
document.getElementsByClassName("problems")[0].addEventListener("click", problemClick);
document.getElementsByClassName("register-button")[0].addEventListener("click", registerClick);
document.getElementsByClassName("register-close")[0].addEventListener("click", registerClose);

document.getElementsByClassName("ham-rules")[0].addEventListener("click", function(){rulesClick(); hamClose();});
document.getElementsByClassName("ham-contact")[0].addEventListener("click", function(){contactClick(); hamClose();});
document.getElementsByClassName("ham-overview")[0].addEventListener("click", function(){overviewClick(); hamClose();});
document.getElementsByClassName("ham-home")[0].addEventListener("click", function(){homeClick(); hamClose();});
document.getElementsByClassName("ham-faq")[0].addEventListener("click", function(){faqClick(); hamClose();});