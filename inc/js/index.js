/*
* Version   : ver 0.0.2
* File      : js/index.js
* Author    : KIM SO YOUNG
* 
* SUMMARY:
* 1) SVG SCROLL EVENT - init, addEvent
* 2) LIST EVENT - listInit, listEvent
*/
function hasJqueryObject($elem) { return $elem.length > 0 }
var app = app || {};

app = {
  init: function(item) {
    Wrap = item,
    bg = '.bg',
    section = 'section',
    mainSvg = '.mainSvg',
    text = 'text',
    scroll = 'scroll',
    em = 'rem',
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
          windowOW = window.outerWidth/3.5;
      if ( winY < 100 ) {
        TweenMax.set($mainSvg, {fontSize: 7 + em});
        TweenMax.set($text, {y:0});

        if(window.outerWidth < 1200) {
          TweenMax.set($mainSvg, {fontSize: 2 + em});
        }
      } else {
        if( winY > windowOW ) {
            TweenMax.to($mainSvg, .55, {opacity:0, zIndex:0, ease:Power3.easeOut});
            TweenMax.to($text, 0, {y:windowOW});
            TweenMax.to($('.top'), .5, {opacity:1, delay:.3, ease:Power3.easeOut});
        } else {
          TweenMax.to($mainSvg, .55, {opacity:1, zIndex:100,fontSize: winY*3 + em, ease:Power3.easeOut});
          TweenMax.to($text, 0, {y:winY});
          TweenMax.to($('.top'), .5, {opacity:0, delay:.3, ease:Power3.easeOut});
        }
      }

      if( window.pageYOffset > $('.container').height() * 1.3 ) {
        var footerH = $('footer').height() + 200;
        TweenMax.to($bg, .55, {y: -footerH + 'px', ease:Power3.easeOut});
      } else {
        TweenMax.to($bg, .55, {y:'0', ease:Power3.easeOut});
      }
    });
    
    let chText = document.querySelector('.mainSvg text');
    setTimeout(() => {
      chText.innerHTML = "KIM SO YOUNG"
    }, 5000);

  },
  listInit: function(){
    this.item = '.listItem';
    this.$item = app.$body.find(this.item);
    app.listEvent();
  },
  listEvent: function(){
      $(this.$item).on('mouseenter', function(){
          TweenMax.to($(this).find('.btmArea'), .5, {height:'auto', opacity:1});
          TweenMax.to($(this).find('.itemInfo'), .5, {top:'-15px', left:'-15px', padding:'280px 10px 10px'});
      }).on('mouseleave', function(){
          TweenMax.set($(this).find('.btmArea'), {height:0, opacity:0});
          TweenMax.set($(this).find('.itemInfo'), {top:'15px', left:'15px', padding:'210px 10px 10px'});
      })
  }
}
  
$(function(){
  app.$body = $("body");
  hasJqueryObject(app.$body.find(".wrap")) && app.init(".wrap");
  hasJqueryObject(app.$body.find(".listItem")) && app.listInit(".listItem");
})