$(document).ready(function () {

	$(".modal--trailer--open").click(function() {
		$("html").addClass("modalOpen");
		$(".modal--trailer").addClass("open");
	});

	$(".modal--close").click(function(){
		$("html").removeClass("modalOpen");
		$(".modal").removeClass("open");
	})

	window.onclick = e => {
		if ($(e.target).hasClass("modal")) {
			if ($(".modal--trailer").hasClass("open")) {
				$(".modal--trailer--video")[0].pause();
			}
			$("html").removeClass("modalOpen");
			$(".modal").removeClass("open");
		}
	}

	// Tooltips
	const gatewayTooltip = $('.gateway--tooltip');

	if (gatewayTooltip.length) {
		tippy('.gateway--referral--info', {
			content: gatewayTooltip.html(),
			allowHTML: true,
			maxWidth: 300,
			placement: 'top',
			theme: 'default',
			arrow: false,
		});
	}

})