$(document).ready(function(){
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


	 //security

	 //top
	var $topScroll = $("footerr") // 0~ 653
	var $topScrollTop = $("footer").offset().bottom; //1011

	 $(window).scroll(function(e){
		st = $(this).scrollTop();

		if(st > $topScrollTop){
			$topScroll.removeClass("on");
		}else{
			$topScroll.addClass("on");
		}
		console.log($topScrollTop)
	 });
	 
})