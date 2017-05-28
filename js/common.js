$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function () {

	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 80
	});
});

   // Page scrolling feature
   $(document).ready(function(){

    			$('a.page-scroll').click( function(){ // ловим клик по ссылке с классом
						var link = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(link).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(link).offset().top }, 500); // анимируем скроолинг к элементу link
	  }
	    return false; // выключаем стандартное действие
	  });
    		});

   var cbpAnimatedHeader = (function () {
   	var docElem = document.documentElement,
   	header = document.querySelector('.navbar-default'),
   	didScroll = false,
   	changeHeaderOn = 200;

   	function init() {
   		window.addEventListener('scroll', function (event) {
   			if (!didScroll) {
   				didScroll = true;
   				setTimeout(scrollPage, 250);
   			}
   		}, false);
   	}

   	function scrollPage() {
   		var sy = scrollY();
   		if (sy >= changeHeaderOn) {
   			$(header).addClass('navbar-scroll')
   		}
   		else {
   			$(header).removeClass('navbar-scroll')
   		}
   		didScroll = false;
   	}

   	function scrollY() {
   		return window.pageYOffset || docElem.scrollTop;
   	}

   	init();

   })();

   
