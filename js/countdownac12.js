$(document).ready(function () {

	const target = new Date("Mar 28, 2024 10:00:00").getTime();
	const today = new Date().getTime();
	const timezoneOffset = new Date().getTimezoneOffset();

	let c = Math.abs((target - today - (timezoneOffset * 60 * 1000)) / 1000);

	function countdown() {
		c--;
		let secs  = Math.floor(c % 60);
		let mins  = Math.floor((c/60) % 60);
		let hours = Math.floor((c/(60*60)) % 24);
		let days = Math.floor((c/(60*60*24)));
		
		$("#seconds").text(secs);
		$("#minutes").text(mins);
		$("#hours").text(hours);
		$("#days").text(days);
	};

	setInterval(countdown, 1000);

});

