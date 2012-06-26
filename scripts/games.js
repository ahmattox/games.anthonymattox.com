/*
*  Script by Anthony Mattox
*
*  Created:
*  Last Edited:
*
*/


$(document).ready(init);

function init() {
  $('.game').each(function(i) {
    $(this).animate({'opacity':0},0).delay(30+i*200).animate({'opacity':1},300);
    $(this).find('.playbutton').animate({'opacity':0},0);
  });
  
  $('#head').localScroll({
    'hash': false,
    'axis': 'y',
    'duration': 200,
    'offset': {'top':-43}
  });
  
  $('#pulsus #particles').each(function() {
    var i=300;
    while(i>0) {
      var d = Math.random()*1600+16;
      var r = Math.random()*6.283;
      var x = d*Math.cos(r);
      var y = d*Math.sin(r);
      if (y>-190 && y<190) {
        $(this).append('<div style="top:'+y+'px; left:'+x+'px" class="pt'+Math.floor(Math.random()*3)+'"></div>');
        i--;
      }
    }
  });
  
  $('#orbit #orbitinfo').animate({
    'opacity':0
  },0)
  $('#orbit').hover(
  function() {
    $(this).find('#orbitlogo').stop(true).animate({
      'left':'10%'
    },300);
    $(this).find('#orbitplanet').stop(true).animate({
      'left':'20%'
    },300);
    $(this).find('#orbitinfo').stop(true).show().animate({
      'opacity':1,
      'padding-left':0
    },300);
    $(this).find('.playbutton').stop(true).animate({'opacity':1},200);
  },
  function() {
    $(this).find('#orbitlogo').stop(true).animate({
      'left':'19%'
    },300);
    $(this).find('#orbitplanet').stop(true).animate({
      'left':'40%'
    },300);
    $(this).find('#orbitinfo').stop(true).animate({
      'opacity':0,
      'padding-left':'60px'
    },240, function() {$(this).hide();});
    $(this).find('.playbutton').stop(true).animate({'opacity':0},200);
  });
  
  
  $('#plong #plonginfo div').animate({
    'opacity':0
  },0);
  $('#plong').hover(
  function() {
    $(this).find('#plonginfo').stop(true).animate({
      'margin-top':'-150px'
    },300);
    $(this).find('.plongobstacle').each(function() {
      if ($(this).position().left<$('#plonginfo').position().left+400) {
        $(this).stop(true).animate({
          'opacity': 0
        },200);
      }
    });
    $(this).find('#plonginfo div').stop(true).show().animate({
      'opacity':1
    },300);
    $(this).find('.playbutton').stop(true).animate({'opacity':1},200);
  },
  function() {
    $(this).find('#plonginfo').stop(true).animate({
      'margin-top':'0'
    },300);
    $(this).find('.plongobstacle').stop(true).animate({
      'opacity': 1
    },400);
    $(this).find('#plonginfo div').stop(true).animate({
      'opacity':0
    },300, function() {$(this).hide();});
    $(this).find('.playbutton').stop(true).animate({'opacity':0},200);
  });
  
  
  $('#pulsus #pulsusinfo').animate({'opacity':0},0);
  $(this).find('#pulsusimgv').stop(true).animate({
    'margin-left':'-10px'
  },0);
  $(this).find('#pulsusimgh').stop(true).animate({
    'margin-left':'10px'
  },0);
  $('#pulsus').hover(
  function() {
    $(this).find('#particles, #emitter').stop(true).animate({
      'opacity': .2
    },300);
    $(this).find('#pulsusinfo').stop(true).show().animate({
      'opacity': 1
    },200);
    $(this).find('#pulsusimgv').stop(true).animate({
      'margin-left':0
    },200);
    $(this).find('#pulsusimgh').stop(true).animate({
      'margin-left':0
    },200);
    $(this).find('.playbutton').stop(true).animate({'opacity':1},200);
  },
  function() {
    $(this).find('#particles, #emitter').stop(true).animate({
      'opacity': 1
    },300, function() {
      $(this).removeAttr("style");
    });
    $(this).find('#pulsusinfo').stop(true).animate({
      'opacity': 0
    },200, function() {$(this).hide();});
    $(this).find('#pulsusimgv').stop(true).animate({
      'margin-left':'-10px'
    },200);
    $(this).find('#pulsusimgh').stop(true).animate({
      'margin-left':'10px'
    },200);
    $(this).find('.playbutton').stop(true).animate({'opacity':0},200);
  });
}




/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);