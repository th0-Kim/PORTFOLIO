/*
* Version   : ver 0.0.3
* File      : js/index.js
* Author    : KIM SO YOUNG
* 
* SUMMARY:
* 1) LIST EVENT - listInit, listEvent
*/
function hasJqueryObject($elem) { return $elem.length > 0 }
var app = app || {};

app = {
  listInit: function(){
    this.item = '.listItem';
    this.itemTit = '.itemTit';
    this.$item = app.$body.find(this.item);
    app.listEvent();
  },
  listEvent: function(){
      $(this.$item).on('mouseenter', function(){
        var $itemTit = Number($(this).siblings(this.itemTit).height()) + 'px';
        $(this).addClass('on');
        TweenMax.to($(this).find('.btmArea'), .5, {height:'auto', opacity:1});
        TweenMax.to($(this).find('.itemInfo'), .5, {top:'-15px', left:'-15px', paddingTop: $itemTit});
        TweenMax.to($('.cursor'), 0.5, {scale:0.8, ease:Power3.easeOut});
      }).on('mouseleave', function(){
        $(this).removeClass('on');
        TweenMax.set($(this).find('.btmArea'), {height:0, opacity:0});
        TweenMax.set($(this).find('.itemInfo'), {top:'15px', left:'15px', padding:'75% 10px 10px'});
        TweenMax.to($('.cursor'), 0.5, {scale:0.25, ease:Power3.easeOut});
      });
  }
}
  
$(function(){
  app.$body = $("body");
  hasJqueryObject(app.$body.find(".listItem")) && app.listInit(".listItem");
})