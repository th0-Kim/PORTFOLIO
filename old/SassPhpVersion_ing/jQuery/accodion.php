<?php include '../include/header2.php'; ?>

<div class="wrap" oncontextmenu='return false' ondragstart='return false' onselectstart='return false'>
	
	<dl class="accodiWrap">
		<dt class="accodiHd on"><span class="quest">Q. </span> 어떤 에디터를 주로 사용 했나요 ?<span class="accodiAw"></span></dt>
		<dd class="accodiArea">
			<div>
				일반 html 작업은 'sublimetext2'를 사용했으며<br />
				협업 및 프로젝트는 'eclipse'를 사용했습니다.
			</div>
		</dd>

		<dt class="accodiHd"><span class="quest">Q. </span> 프로젝트에서 포지션이 무엇인가요?<span class="accodiAw"></span></dt>
		<dd class="accodiArea">
			<div>
				첫 실무에서는 서브 퍼블리싱을 하였고 이 후 담당했던 프로젝트의 메인 퍼블리셔로서 
				메인 및 프로젝트 전체 서브페이지를 작업 하였습니다.<br />
				때론 디자이너와 개발자의 중간 역할을 하곤 했습니다.
			</div>
		</dd>

		<dt class="accodiHd"><span class="quest">Q. </span> jQuery는 얼만큼 할 수 있나요?<span class="accodiAw"></span></dt>
		<dd class="accodiArea">
			<div>
				플러그인과 같은 복잡한 소스를 개발 할 수 없지만<br />
				지금 보시는 것과 같은 실무에서 바로 적용 가능한 동적인 jQuery는 만들 수 있습니다.
			</div>
		</dd>

		<dt class="accodiHd"><span class="quest">Q. </span> 앞으로의 계획은 무엇입니까?<span class="accodiAw"></span></dt>
		<dd class="accodiArea">
			<div>
				다양한 프로젝트를 경험하고 싶습니다.<br/>
				그리고<br />
				실무에 적합한 사람이 되기 위해 끝임없이 자기개발을 할 것 입니다. <br/>
			</div>
		</dd>
	</dl>

</div>
	

<script>
	$(document).ready(function(){
		//accodion
		var accdiBtn = $('.accodiHd');
		var accodiArea = $('.accodiArea');
		var accdiCon = $('.accodiHd.on').next(); // 첫번째 아코디언 on

		if( accdiBtn.hasClass('on') ){ // 첫번째 아코디언 열기
			accdiCon.css({height : accdiCon.prop("scrollHeight")});
		}

		$(accdiBtn).click(function(){
			var accdiCon = $(this).next(); //아코디언 내용

			//accdiBtn.removeClass('on') //아코디언 버튼 전체 리셋 (하나씩만 보이게)
			//accodiArea.css({height : 0}); //아코디언 내용 전체 리셋 (하나씩만 보이게)

			if( $(this).hasClass('on') ){ // 닫기
				$(this).removeClass('on') // 버튼 off
				accdiCon.css({height : 0});
			}else{
				$(this).addClass('on') // 버튼 on
				accdiCon.css({height : accdiCon.prop("scrollHeight")}); // 열기
			}
		})
	})
</script>

</body>
</html>
