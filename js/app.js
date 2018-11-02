$(document).foundation();


$('#offCanvas').on('opened.zf.offcanvas', function (e) {
	var i = 0;
	$('.link').each(function(i, obj) {
		$(this).delay(100*(i++)).queue( function() {
			$(this).addClass('slide').dequeue();
		});
	});
	
}).on('closed.zf.offcanvas', function(e) {
	$('.link').removeClass('slide');
});
