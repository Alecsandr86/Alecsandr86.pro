$(function(){

    /**
     * animate.css
     * ================================= */


    $.fn.extend({
      animateCss: function () {

        var $this = $(this),
            animatedName = $this.data('animatedname'),
            animatedDelay = $this.data('animateddelay');

        if(animatedName === undefined){
          animatedName = "fadeIn"
        }
        if(animatedDelay === undefined){
          animatedDelay = 0
        }
          setTimeout(function () {
            $this.addClass('animated ' + animatedName)
          },animatedDelay)
      }
    });

    /**
     * fullpage
     * ================================= */

    setTimeout(function () {
      var numbs = $('#fp-nav').append("<span id='numbs' class='fp-nav__numb'>- 01</span>");
    },100);


    $('#fullpage').fullpage({
      menu: '#menu-fullpage',
      anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'],
      navigation: true,
      navigationPosition: 'left',
      responsiveHeight: 450,
      afterLoad: function(anchorLink, index){
        $("#numbs").text("- 0" + index);
        if(index === 1){
          $('.js-animated-start').animateCss();
          $('.js-animated-title').animateCss();
          $('.js-animate-down').animateCss();
        }
        if(index === 2){
          $('.js-animated-text-3').animateCss();
          $('.js-animated-img-6').animateCss();
        }
        if(index === 3){

          $('.js-animated-img-1').animateCss();
          $('.js-animated-img-2').animateCss();
          $('.js-animated-img-3').animateCss();
          $('.js-animated-text-1').animateCss();

        }
        if(index === 4){
          $('.js-animated-text-2').animateCss();
          $('.js-animated-img-4').animateCss();
          $('.js-animated-img-5').animateCss();
        }
        if(index === 5){
          $('.js-animate-box-1').animateCss();
          $('.js-animate-box-2').animateCss();
          $('.js-animate-box-3').animateCss();
          $('.js-animate-title-1').animateCss();
        }

      }
    });

    $('.js-btn-next-slid').on('click', function () {
      $.fn.fullpage.moveTo('section-2');
    });
    $('.js-btn-up').on('click', function () {
      $.fn.fullpage.moveTo('section-1')
    })



});


/**
 * ------------------------------------------------------------------------
 * Window Loader
 * ------------------------------------------------------------------------
 */

var $elemLoader = $('.loader-box,.loader');

$elemLoader.fadeIn(10);

$(window).on("load", function() {
    $elemLoader.fadeOut(500);

});




