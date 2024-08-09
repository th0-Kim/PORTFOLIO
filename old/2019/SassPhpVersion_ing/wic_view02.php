<?php include 'include/header2.php'; ?>
<div class="contents">
	<div class="wicView">
		<div class="sce clearfix">
			<div class="textareaWrap html">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">

<div class="tabBtn clearfix">
	<a href="#tab01" class="on">탭1</a>
	<a href="#tab02">탭2</a>
	<a href="#tab03">탭3</a>
</div>
<div class="tabBox on" id="tab01">탭1에 대한 내용입니다.</div>
<div class="tabBox" id="tab02">탭2에 대한 내용입니다.</div>
<div class="tabBox" id="tab03">탭3에 대한 내용입니다.</div>

				</textarea>
			</div>
			<div class="textareaWrap css">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
/* tab */
.tabBtn{width: 300px; margin: 30px auto 0; border: 1px solid #ddd; border-right: 0;}
.tabBtn a{display: block; float: left; width: 33.33%; box-sizing: border-box; border-right: 1px solid #ddd; text-align: center; line-height: 60px;}
.tabBtn a:hover, .tabBtn a.on{background-color: #eaa; color: #fff;}

.tabBox{display: none; width: 260px; height: 200px; padding: 20px; margin: 0 auto;}
.tabBox#tab01{background-color: #fea;}
.tabBox#tab02{background-color: #eae;}
.tabBox#tab03{background-color: #aee;}

.tabBox.on{display: block;}
	
				</textarea>
			</div>
			<div class="textareaWrap js">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
				
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

				</textarea>
			</div>
		</div>

		<div class="viewArea">
			<iframe src="jQuery/tab.php" class="sample"></iframe>
		</div>
	</div>
</div>

<?php include 'include/footer.php'; ?>