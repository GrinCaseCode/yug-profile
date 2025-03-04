$(document).ready(function() {


//прилипающие меню
var $btnCalc = $(".btn-calculator-wrap");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 200 && $btnCalc.hasClass("default") ){
    $btnCalc.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 200 && $btnCalc.hasClass("fixed")) {
    $btnCalc.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $btnCalc.hasClass("default") ){
    $btnCalc.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $btnCalc.hasClass("fixed")) {
    $btnCalc.removeClass("fixed").addClass("default");
  }

  $(".btn-main_filter").click(function(e) {
	e.preventDefault();
	$(this).toggleClass("active");
	$(".sidebar-catalog").slideToggle(200);
});

  $(".item-sidebar__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-sidebar").removeClass("active");
    $(this).parent().siblings(".item-sidebar").find(".item-sidebar__content").slideUp(200);
  });

//locations
$(document).mouseup(function (e) {
	var container2 = $(".location-main");
	if (container2.has(e.target).length === 0){
		$(".location-drodown").slideUp(200);
	}
});

$(".location-main__value").click(function() {
	if ($(this).parents(".location-main").find(".location-drodown").is(":hidden")) {
		$(this).parents(".location-main").find(".location-drodown").slideDown(200);
	} else {
		$(this).parents(".location-main").find(".location-drodown").slideUp(200);
	}
});

$('.input-calculator input').blur(function() {
	$(".scheme-calculator *").removeClass("active"); 
	$(".input-calculator").removeClass("active"); 
  })
  .focus(function() {
	var dataCalc = $(this).parent().data('calculator');
	$(this).parent().addClass("active");
	$("." + dataCalc).addClass("active"); 
  });



	//кнопка sandwich
	$(".sandwich").click(function() {
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
			$(".sandwich").addClass("active");
			$("body").addClass("no-scroll");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
	});

	$(".menu-mobile .menu__haschild > a").click(function(e) {
		e.preventDefault();
		$(this).parent().siblings().removeClass("active");
		$(this).parent().siblings().find("ul").slideUp(200);
		if ($(this).siblings("ul").is(":hidden")) {
			$(this).siblings("ul").slideDown(200);
			$(this).parent().addClass("active");
		} else {
			$(this).siblings("ul").slideUp(200);
			$(this).parent().removeClass("active");
		}
		});

		/*input file*/
		$("input[type='file']").change(function(){
			var filename_text = $(this).parent().siblings(".name-upload");
			var filename = $(this).val().replace(/.*\\/, "");
			filename_text.html(filename);
		});

	//слайдер

	$('.slider-catalog').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
			{ 
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{ 
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{ 
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.item-catalog__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-for').slick({
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-nav').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		touchThreshold: 1000,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.item-catalog__slider').on('touchstart touchmove', function (e) {
		e.stopPropagation();
		e.preventDefault();
	});

	$('.item-catalog__slider').on("mousedown mouseup", function(e) {
		e.stopPropagation();
		e.preventDefault();
  })

	$(".input-phone").mask("+7 (999) 999-99-99");

	//search
	$(".open-search").click(function() {
		if ($(".header-search").hasClass("active")) {
			$(".header-search").removeClass("active");
		} else {
			$(".header-search").addClass("active");
			$(".header-search").find("input[type='text']").focus();
		}
	});

	  $(document).mouseup(function (e) {
		var container = $(".header-search");
		if (container.has(e.target).length === 0){
		$(".header-search").removeClass("active");
		}
	});


	 // стайлер для select
	 $('.item-select select, .select-filter select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

