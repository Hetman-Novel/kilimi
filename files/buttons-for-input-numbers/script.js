$(function() {
	// Buttons + - for Input numbers
	$(document).ready(function() {
		$('.number__minus').click(function () {
			var $input = $(this).parent().find('.number__input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.number__plus').click(function () {
			var $input = $(this).parent().find('.number__input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	});
});