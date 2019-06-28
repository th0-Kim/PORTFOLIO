<?php include '../include/header2.php'; ?>

<div class="wrap" oncontextmenu='return false' ondragstart='return false' onselectstart='return false'>
	<div class="topWrap">
		<div id="top" class="topmenu">
			<a href="#">menu1</a>
			<a href="#">menu2</a>
			<a href="#">menu3</a>
			<a href="#">menu4</a>
		</div>
		<a title="맨위로가기" class="topBtn" href="#top">Top</a>
	</div>
</div>
	

<script>
	$(document).ready(function(){
		 //top버튼 
		$('.topBtn').click(function(){
			$('html, body').stop().animate({scrollTop : 0},600);
			return false;
		});

	})
</script>

</body>
</html>
