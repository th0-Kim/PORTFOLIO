var st = 0,
	$subScrollM = $(".header"),
	$subScrollMTop = $(".header").offset().top,
	$topBtn = $(".top"),
	$contentsTop = $(".contents").offset().top;

$(window).scroll(function(e){
	//SUB SCROLL MENU
	st = $(this).scrollTop();
	if(st > $subScrollMTop){
		$subScrollM.addClass("on");
	}else{
		$subScrollM.removeClass("on");
	};

	// TOP BUTTON
	if ( st > $contentsTop ) {
		$topBtn.fadeIn();
	} else {
		$topBtn.fadeOut();
	};

	// TOP BUTTON MOVE TO TOP
	$topBtn.click( function() {
		$( 'html, body' ).stop().animate( { scrollTop : 0 }, 400 );
		return false;
	} );
});


