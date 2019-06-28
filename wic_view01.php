<?php include 'include/header2.php'; ?>
<div class="contents">
	<div class="wicView">
		<div class="sce clearfix">
			<div class="textareaWrap html">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">

<div class="hdWrap">
	<nav class="gnb clearfix">
		<a href="#">Home</a>
		<a href="#" class="middle">jQuery</a>
		<a href="#">Publishing</a>
	</nav>
</div>

				</textarea>
			</div>
			<div class="textareaWrap css">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
.hdWrap{
	background-color: rgba(24,190,176,1);
	opacity: 0.5;
}
.hdWrap:hover{
	opacity: 0.8; 
	transition: all 0.5s;
	}
.hdWrap.on{
	position: fixed; 
	left: 0; 
	top: 0; 
	z-index: 9999; 
	width: 100%; 
	background-color: rgb(136, 66, 111);
	transition: all 0.5s;
}
.hdWrap .gnb{width: 600px; margin: 0 auto;}
.hdWrap .gnb a{
	display: block; 
	float: left; 
	width: 33.333%; 
	line-height: 80px; 
	text-align: center; 
	box-sizing: border-box;
	color: #fff;
	}
.hdWrap .gnb a.middle{border-left: 1px solid #fff; border-right: 1px solid #fff;}
.hdWrap.on .gnb a{line-height: 50px;}	
				</textarea>
			</div>
			<div class="textareaWrap js">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
				
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

				</textarea>
			</div>
		</div>

		<div class="viewArea">
			<iframe src="jQuery/scrolltop.php" class="sample"></iframe>
		</div>
	</div>
</div>

<?php include 'include/footer.php'; ?>