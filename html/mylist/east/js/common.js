$(document).ready(function(){
	$('.mob-menu-btn').click(function(){
		if( $('.drawer').hasClass('on') ){
			$('.drawer').removeClass('on');
			$('.mob-menu-btn').removeClass('on');
		}else{
			$('.drawer').addClass('on');
			$('.mob-menu-btn').addClass('on');
		}
	})
})