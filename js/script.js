// load
$(window).on('load', function () {
  setTimeout(() => {
    $('.overlay-loader').fadeOut();
  }, 2000);
  $('.loading').css('display','none');
});

// carousel
$( function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      600: {
        items: 2
      }
    }
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })
  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  });
});

// nav
$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function(event){
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});

// animation
jQuery(document).ready(function() {
  jQuery('.header__text').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: 100
  });
  jQuery('.header__icons').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 100
  });
  jQuery('.about__little').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 100
  });
  jQuery('.about__skills').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: 100
  });
  jQuery('.groupOne__icons').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 100
  });
  jQuery('.groupTwo__icons').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInUp',
    offset: 100
  });
  jQuery('.groupThree__icons').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInUp',
    offset: 100
  });
  jQuery('.clients').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 100
  }); 
  jQuery('.touch__title').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: 100
  });
  jQuery('.touch__form').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated bounceInUp',
    offset: 100
  });
  jQuery('.work__icons').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInX',
    offset: 100
  });
  jQuery('.tile').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInX',
    offset: 100
  });
});

// counter
$(function(){
  (function(){
    $.belowthefold = function(element) {
      var fold = $(window).height() + $(window).scrollTop();
      return fold <= $(element).offset().top;
    };

    $.abovethetop = function(element) {
      var top = $(window).scrollTop();
      return top >= $(element).offset().top + $(element).height();
    };

    $.inviewport = function(element) {
      return !$.belowthefold(element) && !$.abovethetop(element);
    };

    $.extend($.expr[':'], {
      "inViewport": function(a){return $.inviewport(a);}
    });
  })()
  var timer = 0 ,
  handler = function(){
  $('.groupThree__count1:inViewport').animate({ groupThree__count1: 192}, {
    duration: 10000,
    step: function (groupThree__count1){
      this.innerHTML = (groupThree__count1).toFixed(0)
    }
  });

$('.groupThree__count2:inViewport').animate({ groupThree__count2: 118}, {
  duration: 5000,
  step: function (groupThree__count2){
    this.innerHTML = (groupThree__count2).toFixed(0)
  }
});

$('.groupThree__count3:inViewport').animate({ groupThree__count3: 950}, {
  duration: 10000,
  step: function (groupThree__count3){
    this.innerHTML = (groupThree__count3).toFixed(0)
  }
});


$('.groupThree__count4:inViewport').animate({ groupThree__count4: 650}, {
  duration: 5000,
  step: function (groupThree__count4){
    this.innerHTML = (groupThree__count4).toFixed(0)
  }
});

};

handler();

$(window).scroll(function(){
  if(timer){
    clearTimeout(timer);
    timer = 0;
  }
  timer = setTimeout(handler, 500);
});

});

// 
