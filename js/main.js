$(function() {
	$('nav a').on('click', function(event) {
		event.preventDefault();
		var elem = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(elem).offset().top
	    }, 1000);
	});

	$('#hamburger').on('click', function() {
		$('nav').slideToggle();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 600 && !$('nav').is(':visible')) {
			$('nav').show();
		} else if ($(window).width() < 600 && $('nav').is(':visible')) {
			$('nav').hide();
		}
	});

});