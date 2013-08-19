jQuery.fn.anchorScroll = function()
{
	$(this).click(function(event)
	{
		event.preventDefault();
		$('html, body').animate({scrollTop: $(this.hash).offset().top}, 500);
	});
}