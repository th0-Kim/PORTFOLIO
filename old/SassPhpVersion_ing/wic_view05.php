<?php include 'include/header2.php'; ?>
<div class="contents">
	<div class="wicView">
		<div class="sce clearfix">
			<div class="textareaWrap html">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
<div class="scrollBar">
	<div class="rollBar_wrap">
		<div class="rollBar"></div>
	</div>
</div>

				</textarea>
			</div>
			<div class="textareaWrap css">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
/* scrollBar */
.scrollBar{height: 900px;}
.rollBar_wrap{position: fixed; overflow: hidden;}
.rollBar_wrap .rollBar{display: block; height: 3px; background-color: #e15757;}
	
				</textarea>
			</div>
			<div class="textareaWrap js">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
				
$(document).ready(function(){
	//scrollBar
	$(window).on("scroll",function(){
		var st = $(this).scrollTop() ;
		var bh=$("body").height() - $(window).height();
		var per = (st*100) / bh;
		$(".rollBar_wrap").stop().animate({width : per+"%"})
	})
	 
})

				</textarea>
			</div>
		</div>

		<div class="viewArea">
			<iframe src="jQuery/scrollBar.php" class="sample"></iframe>
		</div>
	</div>
</div>

<?php include 'include/footer.php'; ?>