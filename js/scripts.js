// Windows Ready Handler
 	
(function($) {
    $(document).ready(function(){
    	var $hamburger = $(".hamburger");
		  $hamburger.on("click", function(e) {
		    $hamburger.toggleClass("is-active");
		    // Do something else, like open/close menu
            $('.logo').toggleClass('hide-logo')
            $('.main-navigation').toggleClass('show');
		  });

	  $('.main-navigation a[href*="#"]').on('click', function(e) {
		  e.preventDefault();

		  $('html, body').animate(
		    {
		      scrollTop: $($(this).attr('href')).offset().top,
		    },
		    500,
		    'linear'
		  )
		})

    	$(window).scroll(function() {
		   var hT = $('.trigger-animation-zoomIn').offset().top,
		       hH = $('.trigger-animation-zoomIn').outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		   if (wS > (hT+hH-wH)){
		       $(' #skills .trigger-animation-zoomIn').addClass('animated zoomIn');
		   }
		});
    }); 
}(jQuery));