<?php include '../include/header2.php'; ?>

<div class="wrap" oncontextmenu='return false' ondragstart='return false' onselectstart='return false'>
	<div class="tabBtn clearfix">
		<a href="#tab01" class="on">탭1</a>
		<a href="#tab02">탭2</a>
		<a href="#tab03">탭3</a>
	</div>
	<div class="tabBox on" id="tab01">탭1에 대한 내용입니다.</div>
	<div class="tabBox" id="tab02">탭2에 대한 내용입니다.</div>
	<div class="tabBox" id="tab03">탭3에 대한 내용입니다.</div>
</div>
	

<script>
	$(document).ready(function(){
		//tab
		$('.tabBtn a').click(function(){
			var tabBtn = $(this).attr('href');
			$('.tabBtn a').removeClass('on');
			$('.tabBox').removeClass('on');

			if( $(this).hasClass('on') ){
				$(this).removeClass('on');
				$(tabBtn).removeClass('on');

			}else{
				$(this).addClass('on');
				$(tabBtn).addClass('on');
			}

			return false;
		})
		
	})
</script>

</body>
</html>
