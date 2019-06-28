/* 웹브라우져 복사 방지 */
$(document).ready(function() {   
	  //$(document)[0].oncontextmenu = function() {return false;}  ; // 우클릭방지
	  //$(document)[0].onselectstart = function() {return false;}  ; // 복사 방지
	  //$(document)[0].ondragstart = function() {return true;}  ;   // 드래그방지
	  //$(document)[0].onkeyup =	ClipBoardClear ;	  // 키이벤트 발생 시 클립보드 삭제
	  //$(document)[0].onkeydown =	keyDown ;	
	  
	 $(document).keyup(function(e){
		  if(e.keyCode == 44) {
			  alert ("스크린캡쳐는 허락 되지 않습니다."); 
			  return false;
		  }
		  if(e.keyCode > 111 && e.keyCode < 124) {
			  alert ("개발도구용 키는 허락 되지 않습니다."); 
			  return false;
		  }
		  
		});
	 
	  
}); 
 

  