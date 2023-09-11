<?php include 'include/header2.php'; ?>
<div class="contents">
	<div class="cardWrap wic clearfix">
		<a href="wic_view09.php" onclick="return false;" target="_blank" class="card yet" title="준비중입니다 : )">
			<div class="jscardEx">
				Toggle Menu
			</div>
		</a>

		<a href="wic_view08.php" onclick="return false;" target="_blank" class="card yet" title="준비중입니다 : )">
			<div class="jscardEx">
				indicate
			</div>
		</a>

		<a href="wic_view07.php" onclick="return false;" target="_blank" class="card yet" title="준비중입니다 : )">
			<div class="jscardEx">
				모달 레이어 팝업
			</div>
		</a>
		<a href="wic_view06.php" target="_blank" class="card" title="이동됩니다 ^^">
			<div class="jscardEx">
				top버튼
			</div>
		</a>
		<a href="wic_view05.php" target="_blank" class="card" title="이동됩니다 ^^">
			<div class="jscardEx">
				scrollBar
			</div>
		</a>
		<a href="wic_view04.php" target="_blank" class="card" title="이동됩니다 ^^">
			<div class="jscardEx">
				레이어 팝업
			</div>
		</a>
		
		<a href="wic_view03.php" target="_blank" class="card" title="이동됩니다 ^^">
			<div class="jscardEx">
				Accordion Q&amp;A
			</div>
		</a>
		<a href="wic_view02.php" target="_blank" class="card" title="이동됩니다 ^^">
			<div class="jscardEx">
				Tab
			</div>
		</a>
		<a href="wic_view01.php" target="_blank" class="card" title="이동됩니다 ^^">
			<div class="jscardEx">
				Header ScrollTop
			</div>
		</a>
	</div>
</div>
<?php include 'include/footer.php'; ?>

<script>
	$(document).ready(function(){
		$('.yet').click(function(){
			alert('준비중입니다 ^^');
		})
	})
</script>