//SUB SCROLL MENU
var st = 0;
var $subScrollM = $(".header")
var $subScrollMTop = $(".header").offset().top;

	$(window).scroll(function(e){
	st = $(this).scrollTop();
	if(st > $subScrollMTop){
		$subScrollM.addClass("on");
	}else{
			$subScrollM.removeClass("on");
	}
	});