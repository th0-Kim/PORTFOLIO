<?php include '../include/header2.php'; ?>

<div class="wrap" oncontextmenu='return false' ondragstart='return false' onselectstart='return false'>
	
	<div class="layerpopUp">
		<h2 class="titile">신청서 <button type="button" class="popupBtn">click!</button></h2>
		
		<div class="popupArea">
			<form action="" id="from">
				<table>
					<colgroup>
						<col width="30%">
						<col width="70%">
					</colgroup>
					<tbody>
						<tr>
							<td>이름</td>
							<td><input type="text" value="김소영" class="info info01"/></td>
						</tr>
						<tr>
							<td>직업</td>
							<td><input type="text" value="웹퍼블리셔" class="info info02"/></td>
						</tr>
						<tr>
							<td>연락처</td>
							<td><input type="text" value="010 3287 3001" class="info info03"/></td>
						</tr>
						<tr>
							<td>E-mail</td>
							<td><input type="text" value="ksyy3001@naver.com" class="info info04"/></td>
						</tr>
					</tbody>
				</table>
				<div class="laypopBtn">
					<input type="submit" value="보내기" />
					<input type="reset" value="다시쓰기" class="reset"/>
					<input type="button" value="닫기" class="colse"/>
				</div>
			</form>
		</div>
			
	</div>


</div>
	

<script>
	$(document).ready(function(){
		//layer popup
		$('.popupBtn').click(function(){
			$('.popupArea').show()
		})
		$('.laypopBtn .colse').click(function(){
			$('.popupArea').hide();

			var info = ['김소영','웹퍼블리셔','010 3287 3001', 'ksyy3001@naver.com']
			var infonum = 0;

			for (var i = infonum; i <= 3; i++) {
				$('.info0'+ (i+1) ).val( info[i] );
			};
			
		})
		
		$('.reset').click(function(){
			$('.info').attr('value','');
		})

		
	})
</script>

</body>
</html>
