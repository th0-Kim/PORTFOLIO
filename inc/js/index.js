/*
// ver 0.0.2
*/
function hasJqueryObject($elem) { return $elem.length > 0 }
var app = app || {};

app = {
  init: function(item) {
    Wrap = item,
    bg = '.bg',
    section = '.section',
    mainSvg = '.mainSvg',
    text = 'text',
    scroll = 'scroll',
    em = 'em',
    px = 'px',
    firstClass = 'firstBox';
    $Wrap = app.$body.find(Wrap);
    $bg = $Wrap.find(bg);
    $section = $Wrap.find(section);
    $mainSvg = $Wrap.find(mainSvg);
    $text = $mainSvg.find(text);

    var bgH = $bg.height();
    $section.first().addClass(firstClass);
    $('.' + firstClass).css({marginTop:bgH + px});
    app.addEvent();
  },
  addEvent: function() {
    $(window).on(scroll, function(){
      var winY = window.scrollY,
          windowOW = window.outerWidth/3;
      if ( winY < 100 ) {
        TweenMax.set($mainSvg, {fontSize: 8 + em});
        TweenMax.set($text, {y:0});
      } else {
        if( winY > windowOW ) {
            TweenMax.to($mainSvg, 0, {opacity:0});
            TweenMax.to($text, 0, {y:windowOW});
        } else {
          TweenMax.to($mainSvg, 0, {opacity:1,fontSize: winY*3 + em});
          TweenMax.to($text, 0, {y:winY});
        }
      }
    });
    
    let chText = document.querySelector('.mainSvg text');
    setTimeout(() => {
      chText.innerHTML = "WEB PUBLISHER."
    }, 5000);

  },
  headerScroll: function() {
    var st = 0,
    $subScrollM = $(".header"),
    $subScrollMTop = $(".header").offset().top,
    $topBtn = $(".top"),
    $contentsTop = $(".contents").offset().top;

    $(window).scroll(function(e){
      //SUB SCROLL MENU
      st = $(this).scrollTop();
      if(st > $subScrollMTop){
        $subScrollM.addClass("on");
      }else{
        $subScrollM.removeClass("on");
      };

      // TOP BUTTON
      if ( st > $contentsTop ) {
        $topBtn.fadeIn();
      } else {
        $topBtn.fadeOut();
      };

      // TOP BUTTON MOVE TO TOP
      $topBtn.click( function() {
        $( 'html, body' ).stop().animate( { scrollTop : 0 }, 400 );
        return false;
      } );
    });
    
  }
}
  
$(function(){
  app.$body = $("body");
  hasJqueryObject(app.$body.find(".wrap")) && app.init(".wrap");
  
})