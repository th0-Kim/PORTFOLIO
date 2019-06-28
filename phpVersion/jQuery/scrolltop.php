<?php include '../include/header2.php'; ?>

<div class="wrap" oncontextmenu='return false' ondragstart='return false' onselectstart='return false'>
	<div class="hdWrap">
		<nav class="gnb clearfix">
			<a href="#">Home</a>
			<a href="#" class="middle">jQuery</a>
			<a href="#">Publishing</a>
		</nav>
	</div>
</div>
	

<script>
	$(document).ready(function(){
		//SUB SCROLL MENU
		var st = 0;
		var $subScrollM = $(".hdWrap")
		var $subScrollMTop = $(".hdWrap").offset().top;

		 $(window).scroll(function(e){
			st = $(this).scrollTop();
			if(st > 30){
				$subScrollM.addClass("on");
			}else{
				 $subScrollM.removeClass("on");
			}

		 })
		 
	})
</script>

</body>
</html>
