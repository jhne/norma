$(document).ready(function() {
	$(".up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	var albumCount = $('.amount-check').html();
	if (albumCount === '1') {
		$('#slideshow_nav').hide();
	};

	$("#hoverpoint").mouseenter(function() {
		var main = $('main');
		var area = $('#hoverpoint')
		if (!main.hasClass('offset')) {
	      main.addClass('offset');
	      area.addClass('offset');
    	}
	});

	$("main").mouseenter(function() {
		$('main').removeClass('offset');
		$('#hoverpoint').removeClass('offset');
	});
});