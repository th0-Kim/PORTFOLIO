<?php include 'include/header2.php'; ?>
<div class="contents">
	<div class="wicView">
		<div class="sce clearfix">
			<div class="textareaWrap html">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
<div class="topWrap">
	<div id="top" class="topmenu">
		<a href="#">menu1</a>
		<a href="#">menu2</a>
		<a href="#">menu3</a>
		<a href="#">menu4</a>
	</div>
	<a title="맨위로가기" class="topBtn" href="#top">Top</a>
</div>
				</textarea>
			</div>
			<div class="textareaWrap css">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
/* topBtn */
.topBtn{position: fixed; right: 10px; bottom: 10px; z-index: 5; width: 40px; line-height: 40px; border-radius: 40px; background-color: rgba(0,0,0,0.3); text-align: center; color: #fff; font-size: 18px; font-weight: 700;}
.topBtn:hover{background-color: rgba(50,200,90,0.4); transition: all 0.5s;}
				</textarea>
			</div>
			<div class="textareaWrap js">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
				
$(document).ready(function(){
	 //top버튼 
	$('.topBtn').click(function(){
		$('html, body').stop().animate({scrollTop : 0},600);
		return false;
	});

})

				</textarea>
			</div>
		</div>

		<div class="viewArea">
			<iframe src="jQuery/topBtn.php" class="sample"></iframe>
		</div>
	</div>
</div>

<?php include 'include/footer.php'; ?>