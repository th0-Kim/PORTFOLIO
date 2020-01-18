var EAST = {
	GNB: function(btn) {
		var _this = this,
			activeClass = 'on',
			$drawer = $('.drawer'),
			event = 'click';
		_this.$GnbBtn = _this.$body.find(btn);
		_this.$GnbBtn.on(event, function(){
			$(this).toggleClass(activeClass);
			if( !$(this).hasClass(activeClass) ){
				$drawer.removeClass(activeClass);
				TweenMax.to( $('.top-bar, .middle-bar, .bottom-bar'), .5, {rotation:0, transformOrigin:"left 0", ease:Linear.easeNone})
				TweenMax.to( $('.top-bar'), .5, {top:'11px'})
				TweenMax.to( $('.middle-bar'), .5, {top:'18px'})
				TweenMax.to( $('.bottom-bar'), .5, {top:'25px', right:0})
			}else{
				$drawer.addClass(activeClass);
				TweenMax.to( $('.top-bar, .middle-bar'), .5, {top:0, rotation:45, transformOrigin:"left 50%", ease:Linear.easeNone})
				TweenMax.to( $('.bottom-bar'), .5, {top:0, right:'6px', rotation:-45, transformOrigin:"right 100%", ease:Linear.easeNone})
			};
		});
	}
}
$(document).ready(function(){
	EAST.$body = $('body');
	EAST.GNB('.mob-menu-btn');
});