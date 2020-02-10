/*
* Version   : ver 0.0.1
* File      : js/textMotion.js
* Author    : M4NC-WP (KSY)
* 
* SUMMARY:
* 1) TEXTMOTION
* 2) BGMOTION
*/
function hasJqueryObject($elem) { return $elem.length > 0 }

var app = app || {};

app = {
    init: function(){
        this.item = '.listItem';
        this.$item = app.$body.find(this.item);
        app.addEvent();
    },
    addEvent: function(){
        $(this.$item).on('mouseenter', function(){
            TweenMax.to($(this).find('.btmArea'), .5, {height:'auto', opacity:1});
            TweenMax.to($(this).find('.itemInfo'), .5, {top:'-15px', left:'-15px', padding:'200px 10px 10px'});
            console.log(1);
        }).on('mouseleave', function(){
            TweenMax.set($(this).find('.btmArea'), {height:0, opacity:0});
            TweenMax.set($(this).find('.itemInfo'), {top:'15px', left:'15px', padding:'190px 10px 10px'});
            console.log(2);
        })
    }
}

$(function(){
    app.$body = $("body");
	hasJqueryObject(app.$body.find(".listItem")) && app.init();
})