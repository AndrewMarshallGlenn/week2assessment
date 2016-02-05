$(document).ready(function(){
	var i = 0;
	$('.generate').on('click',addButtons);
	$('.generate').on('click',function(){
		i++;
	});
	$('.delete').on('click', function(){
		$(this).parents().closest('div').remove();
	})
	$('.change').on('click', function(){
		('.container').toggleClass('red');
	
	function addButtons(){
		$('.container').append('<div class="new"></div>');
		var $el = $('.container').children().last();
		$($el).append('<button class="delete">delete</button>');
		$($el).append('<button class="change">change</button>');
		$($el).append('<p>"the button has been clicked "+ i +" times"</p>');
	}
})