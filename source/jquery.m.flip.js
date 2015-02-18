/*!
 * M Flip - jQuery Plugin
 * version 0.1 (17 Feb 2015)
 * requires jQuery v1.6 or later
 *
 * Examples at http://codepen.io/unavezfui/pen/Byryep
 *
 * Copyright 2015 Manu Morante - www.manumorante.com
 *
 */
(function($){

  var selector = '.m-flip',
    isTouch		 = document.createTouch !== undefined;

  $.fn.extend({
    mflip: function(){
      return this.each(function(){
        $(this).html('<div class="m-flip__content">'+ $(this).html() +'</div>');

        if(isTouch){
          $(this).bind('touchstart', function(){
            $(this).addClass('active');
          }).bind('touchend', function(){
            $(this).removeClass('active');
          });
        }
      });
    }
  });

})(jQuery);