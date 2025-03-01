$(document).ready(function () {

	let cycle = -1;
	let oldCycle = -1;
	const image = $(".hpGame--character--img");
	const circle = $(".hpGame--circle");
	const type = $(".hpGame--type");
	const icon = $(".hpGame--icon");
	const activeClass = "shown";
	const hiddenClass = "hidden";

	let nextStep = () => {
		oldCycle = cycle;
		if (cycle < 3) {
			cycle++
		} else {
			cycle = 0
		}
		changeClass();
	}

	nextStep();
	let int = setInterval(nextStep, 6000);

	type.click(function(){
		if (!$(this).hasClass(activeClass)) {
			oldCycle = cycle;
			cycle = $(this).index();
			changeClass();
			clearInterval(int);
			int = setInterval(nextStep, 6000);
		}
	})

	function changeClass() {
		$(image[oldCycle]).addClass(hiddenClass);
		$(image[oldCycle]).removeClass(activeClass);
		$(image[cycle]).removeClass(hiddenClass);
		$(image[cycle]).addClass(activeClass);
		$(circle).removeClass("ch" + oldCycle.toString());
		$(circle).addClass("ch" + cycle.toString());
		$(type[oldCycle]).removeClass(activeClass);
		$(type[cycle]).addClass(activeClass);
		$(icon[oldCycle]).removeClass(activeClass);
		$(icon[cycle]).addClass(activeClass);
	}

});