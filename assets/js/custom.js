/*-----------------------------------------------------------------------------------

    Template Name: portfio -  Creative Agency & Portfolio HTML Template



    Note: This is Custom Js file

-----------------------------------------------------------------------------------

[Table of contents]

    1. count-number
    2. start all the timers
    3. Start marquee
    4. logodata
    5. custom1 home 1
    6. custom2 home 2
    7. team-slider
    8. myslider
    9. team-slider-threuue
    10. photo home 1
    11. clients
    12. mobile-nav
    13. AOS
    14. scroll
    15. loader
    16. menu-btn
    17. Click to close lightbox
    18. overlay
    19. zoom-slider
    20. progress-bar
    21. accordion
    22. Preloader
    23. sticky

-----------------------------------------------------------------------------------*/

/* 1. count-number */
(function($) {
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });

  /* 2. start all the timers */
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});
$(document).ready(function(){
    /* 3. Start marquee */
    if ( $.isFunction($.fn.marquee) ) {
    $('.marquee_text').marquee({
        direction: 'left',
        duration: 50000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
    }
    /* 4. logodata */ 
    if ( $.isFunction($.fn.owlCarousel) ) {
       $('.logodata').owlCarousel({
    loop:true,
    dot:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
      }
    })
  }
/* 5. custom1 home 1 */
  if ( $.isFunction($.fn.owlCarousel) ) {
    $('.custom1').owlCarousel({
        items:1,
        loop:true,
        // autoplay:true,
        // autoplayTimeout:5000,
    });
/* 6. custom2 home 2 */
    $('.custom2').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:5000,
        navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
    });
/* 7. team-slider */
  $('.team-slider').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    dot:false,
    autoplay:true,
    autoplayTimeout:3000,
    navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:2
        }
    }
})
  /* 8. myslider */
   $('.myslider').owlCarousel({
                items:1,
                loop:true,
                dots: true,
                dotsData: true,
                nav: true,
                autoplay:true,
                mouseDrag:false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeInLeft',
                navText: ["<i class='fa-solid fa-angle-up'></i>","<i class='fa-solid fa-angle-down'></i>"],
            });
  }
/* 9. team-slider-threuue */
    if ($(".team-slider-threuue")[0]){
        var $owl = $('.team-slider-threuue');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); 
});
$owl.owlCarousel({
  center: true,
  loop: true,
  margin:0,
  autoplay:true,
  autoplayTimeout:3000,
  responsive:{
        0:{
            items:1
        },
        1201:{
            items:3
        }
    }
});
       }
/* 10. photo home 1 */
if ( $.isFunction($.fn.owlCarousel) ) {
      $('.photo').owlCarousel({
           items: 1,
          loop: true,
          margin: 10,
           callbacks: true,
          URLhashListener: true,
          dot:false,
          nav:true,
          navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
          startPosition: 'URLHash'

        });
      }
/* 11. clients */
  if ( $.isFunction($.fn.owlCarousel) ) {
  $('.clients').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
}
// * 12. mobile-nav * //
jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

          jQuery(this).toggleClass('active');

        }); 



        jQuery('#nav-icon4').on('click',function(){ 

           // jQuery(this).toggleClass('open');

            jQuery('#mobile-nav').toggleClass('open');

        });



        jQuery('.res-cross').on('click',function(){ 

           jQuery('#mobile-nav').removeClass('open');

            //jQuery('#nav-icon4').removeClass('open')

        });


        jQuery('.bar-menu').on('click',function(){ 

            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();

        });



        jQuery('.res-cross').on('click',function(){ 

           jQuery('#mobile-nav').removeClass('open');

        });

        $('.lightbox-toggle').on('click',function(){ 
            $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
            $('.box').fadeIn();
          });

        /* 13. AOS */
            AOS.init({
              once:true
        });

});



/* 14. scroll */
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').on('click',function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

/* 15. loader */
$(window).on('load',function(){
  setTimeout(function(){ 
  $('.page-loader').fadeOut();
  });
});

/* 16. menu-btn */
$('.menu-btn').on('click', function () {
    $('body.menu-layer').addClass('active');
    return false;
  });
  $('.menu-cls-btn').on('click', function () {
    $('body.menu-layer').removeClass('active');
    return false;
  });  
    /* 17. Click to close lightbox */
          $('.close, .backdrop').on('click',function(){ 
            $('.backdrop').

            animate({'opacity':'0'}, 300, 'linear', function(){
              $('.backdrop').css('display', 'none');
            });
            $('.box').fadeOut();
          });

    /* 18. overlay */
        var boxWidth = $("#lightbox").width();
                $(".white_content").animate({
                    opacity: 0,
                    width:0,
                    left : -10000
            });
                $("#overlay").animate({
                    opacity: 0,
                    width:0,
                    left :0
                });
            $("#close").on('click',function(){ 
            $(".white_content").animate({
                opacity: 0,
                width:0,
                left : -1000
            });
            $("#overlay").animate({
                opacity: 1,
                width:0,
                left :0
            });
            });
            $("#show").on('click',function(){ 
            $(".white_content").animate({
                opacity: 1,
                width:900,
                left :0
            });
            $("#overlay").animate({
                opacity: 1,
                width:boxWidth,
                left :0
            });

        });
//* 19. zoom-slider */
var $owl = $('.zoom-slider');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

if ( $.isFunction($.fn.owlCarousel) ) {
$owl.owlCarousel({
  center: true,
  loop: true,
  margin:0,
  dots:true,
  nav:true,
  navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
  // autoplay:true,
  // autoplayTimeout:5000,
  responsive:{
        0:{
            items:1
        },
        770:{
            items:1
        },
        1000:{
            items:3
        }
    }
});
}

$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 500;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});
$(document).on('click', '.owl-item>div', function() {
  var $speed = 500;
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});


// 
//***YOU DONT NEED THIS IN YOUR CODE *** helper function: getting siblings (for animation toggling with btn)
function _siblings(elem) {
  var siblings = [],
      node = elem;
  
  while (node) {
    node = node.previousElementSibling;
    
    if(node) {
     siblings.push(node); 
    }
  }
  
  return siblings;
}

//toggle animation on button click
document.addEventListener('click', function(item) {
  
  if(item.target.matches('.play-animation')) {
    
    var siblingsArray = [];
    
     siblingsArray = _siblings(item.target);
    
    siblingsArray.forEach(function(item) {
    
      var self = item;
    
      animationToggle(self, 500);
    
    });
    
  }
  
});

/* 20. progress-bar */ 
function additionalElems(progressElement, value, skillName) {

  //adding value
  var valueChild = document.createElement('span');
  valueChild.className = 'progress-bar__value';
  valueChild.innerHTML = value +'%';
  progressElement.appendChild(valueChild);
  
  //adding bar area
  var barChild = document.createElement('div');
  barChild.className = 'progress-bar__bar';
  progressElement.appendChild(barChild);
  
  //adding inner area with the width of value
  var barInnerChild = document.createElement('div');
  barInnerChild.className = 'progress-bar__bar-inner';
  barInnerChild.style.width = value + '%';
  barChild.appendChild(barInnerChild);
 

  //adding skillName
  var skillChild = document.createElement('span');
  skillChild.className = 'progress-bar__skill';
  skillChild.innerHTML = skillName;
  progressElement.appendChild(skillChild);
}

//adding <span> elements for value and skill name
var progressBar = document.querySelectorAll('.progress-bar');

progressBar.forEach(function(item) {
  
  var self = item,
      barValue = self.getAttribute('data-value'),
      skillValue = self.getAttribute('data-skill'),
      effectNum = self.getAttribute('data-effect');
  
  additionalElems(self, barValue, skillValue);
  
  //adding special BEM classes to every progress bar element (to set classes for effects)
  self.className += ' progress-bar--' + effectNum;
  
  var valueElem = self.querySelector('.progress-bar__value');
    
  valueElem.className += ' progress-bar__value--' + effectNum;
  
  var barElem = self.querySelector('.progress-bar__bar');
  
  barElem.className += ' progress-bar__bar--' + effectNum;
  
  var barInnerElem = self.querySelector('.progress-bar__bar-inner');
  
  barInnerElem.className += ' progress-bar__bar-inner--' + effectNum;
  
  var skillElem = self.querySelector('.progress-bar__skill');
    
    skillElem.className += ' progress-bar__skill--' + effectNum;
  
  //adding alignment for values
  if(self.classList.contains('progress-bar--aligned-values')) {
     valueElem.style.left = barValue + '%';
     valueElem.classList.add('progress-bar__value--aligned-value');
  }
  
  //adding additional class for no overflow hidden
  if(self.classList.contains('progress-bar--no-overflow')) {
     barElem.classList.add('progress-bar__bar--no-overflow');
  }
  
})

//function for animation toggling
function animationToggle(progressElement, delay) {
  
    var skillElem = progressElement.querySelector('.progress-bar__skill'),
        valueElem = progressElement.querySelector('.progress-bar__value'),
        skillBar = progressElement.querySelector('.progress-bar__bar-inner');
  
  //removing animated classes, returning to start position
  skillElem.classList.remove('js-animated');
  valueElem.classList.remove('js-animated');
  skillBar.classList.remove('js-animated');
  
  //adding animated classes to start animation
  setTimeout(function() {
    skillElem.classList.add('js-animated');
    valueElem.classList.add('js-animated');
    skillBar.classList.add('js-animated');
  }, delay);
}

//add animation onload
function onloadAnimation() {
  
  progressBar.forEach(function(item) {
    animationToggle(item, 500)
  });
  
}

document.addEventListener("DOMContentLoaded", onloadAnimation());

/* 21. accordion */
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

    /* 22. Preloader */
        $(window).on('load', function () {
            $("body").addClass("page-loaded");
            ("loaded")
        });


/* 23. sticky */

  ( "document ready!" );

  var $sticky = $('.sticky');
  var $stickyrStopper = $('.sticky-stopper');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var generalSidebarHeight = $sticky.innerHeight();
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;

    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number

      if (stopPoint < windowTop) {
          $sticky.css({ position: 'absolute', top: diff });
      } else if (stickyTop < windowTop+stickOffset) {
          $sticky.css({ position: 'fixed', top: stickOffset });
      } else {
          $sticky.css({position: 'absolute', top: 'initial'});
      }
    });

  }