<?php include 'include/header2.php'; ?>
<div class="contents">
	<div class="wicView">
		<div class="sce clearfix">
			<div class="textareaWrap html">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">

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

				</textarea>
			</div>
			<div class="textareaWrap css">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
/* layerpopUp */
.layerpopUp {position: relative; width: 300px; margin: 50px auto;}
.layerpopUp .titile{border: 2px solid #eaa; background-color: #fff; text-align: center; line-height: 50px; color: #444;}
.popupBtn{border: 0; background-color: #fff; text-align: center; line-height: 50px; font-size: 24px; color: #444; cursor: pointer;}
.popupBtn:hover{color: #aae;}
.layerpopUp .popupArea{display: none; position: absolute; left: 50%; top: 0; z-index: 1; width: 500px; margin-left: -250px; background-color: #fff; border: 1px solid #eae;}
.layerpopUp .popupArea table{width: 400px; margin: 30px auto;}
.layerpopUp .popupArea table td{padding: 5px 0; border-bottom: 2px solid #fff;border-left: 2px solid #fff; background-color: #dfe; text-align: center; font-size: 14px;}
.layerpopUp .popupArea table td input[type="text"]{width: 90%; padding: 5px 1%; box-sizing: border-box; background-color: rgba(255,255,255,0.7); border: 0;}
.laypopBtn{text-align: center; margin-bottom: 30px;}
.laypopBtn input{width: 100px; padding: 5px 0; border: 1px solid #eab; text-align: center; background-color: #eab; color: #fff; cursor: pointer;}
.laypopBtn input:hover{background-color: #fff;}
.laypopBtn input[type="submit"]:hover{border: 1px solid #aee; color: #aee;}
.laypopBtn input[type="reset"]:hover{border: 1px solid #ccc; color: #ccc;}
.laypopBtn .colse:hover{color: #eab;}
	
				</textarea>
			</div>
			<div class="textareaWrap js">
				<textarea name="" id="" cols="100" rows="50" readonly oncopy="return false" oncut="return false" onpaste="return false">
				
$(document).ready(function(){
	//layer popup
	$('.popupBtn').click(function(){
		$('.popupArea').show()
	})
	$('.laypopBtn .colse').click(function(){
		$('.popupArea').hide();
	})
	
})

				</textarea>
			</div>
		</div>

		<div class="viewArea">
			<iframe src="jQuery/layerpopup.php" class="sample"></iframe>
		</div>
	</div>
</div>

<?php include 'include/footer.php'; ?>