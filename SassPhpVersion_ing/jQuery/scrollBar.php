<?php include '../include/header2.php'; ?>

<div class="wrap" oncontextmenu='return false' ondragstart='return false' onselectstart='return false'>
	<div class="scrollBar">
		<div class="rollBar_wrap">
			<div class="rollBar"></div>
		</div>
	</div>
</div>
	

<script>
	$(document).ready(function(){
		//scrollBar
		$(window).on("scroll",function(){
			var st = $(this).scrollTop() ;
			var bh=$("body").height() - $(window).height();
			var per = (st*100) / bh;
			$(".rollBar_wrap").stop().animate({width : per+"%"})
		})
		 
	})
</script>

</body>
</html>
