$(document).ready(function () {

	let sending = false;
	const baseUrl = window.location.origin;
	let sendUrl, newsletterUrl, demoUrl;

	if (baseUrl.indexOf("localhost") >= 0) {
		sendUrl = baseUrl + "/spacecatch.io/php/sendEmail.php" 
		newsletterUrl = baseUrl + "/spacecatch.io/php/newsletter.php" 
		demoUrl = baseUrl + "/spacecatch.io/php/demo.php" 
	} else {
		sendUrl = baseUrl + "/php/sendEmail.php"
		newsletterUrl = baseUrl + "/php/newsletter.php"
		demoUrl = baseUrl + "/php/demo.php"
	}

	function isEmail (email) {
		let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
		return regex.test(email);
	}

	function checkMail (x) {
		if (x.val() == "" | !isEmail(x.val())) {
			$(x).addClass("wrong");
			setTimeout(() => {
				$(x).removeClass("wrong");
			}, 3000);
			return false;
		} else {
			return true;
		}
	}

	function notEmpty (x) {
		if (x.val() == "") {
			$(x).addClass("wrong");
			setTimeout(() => {
				$(x).removeClass("wrong");
			}, 3000);
			return false;
		} else {
			return true;
		}
	}

	// Contact form
	$(".contact--form--submit").click(function (e) {
		e.preventDefault();
		let name = $("#name");
		let mail = $("#email");
		let message = $("#message");

		notEmpty(name);
		checkMail(mail);
		notEmpty(message);

		if (sending) { return };

		if (notEmpty(name) && checkMail(mail) && notEmpty(message)) {
			sending = true;
			jQuery.ajax({
				url: sendUrl,
				method: "POST",
				data: { name: name.val(), mail: mail.val(), message: message.val() },
				success: function (result) {
					sending = false;
					if (result == 1) {
						$("form").trigger("reset");
						$(".contact--form--notification").text("The message has been sent successfully.");
						$(".contact--form--notification, .contact--form--submit").addClass("success");
						setTimeout(() => {
							$(".contact--form--notification, .contact--form--submit").removeClass("success");
						}, 5000);
					} else {
						$(".contact--form--notification").text("There was an error, please contact us by other means.");
						$(".contact--form--notification").addClass("wrong");
						setTimeout(() => {
							$(".contact--form--notification").removeClass("wrong");
						}, 5000);
					}
				}
			})
		}
	})


	// Gateway
	$("#gatewaySubmit").click(function (e) {
		e.preventDefault();
		let email = $("#email2");

		checkMail(email);

		if (sending) { return };

		if (checkMail(email)) {
			sending = true;
			jQuery.ajax({
				url: newsletterUrl,
				method: "POST",
				data: { email: email.val() },
				success: function (result) {
					sending = false;
					if (result == 1) {
						$("form").trigger("reset");
						$("#gatewaySubmit").addClass("success");
						setTimeout(() => {
							$("#gatewaySubmit").removeClass("success");
						}, 5000);
					} else {
						$(email).addClass("wrong");
						setTimeout(() => {
							$(email).removeClass("wrong");
						}, 5000);
					}
				}
			})
		}
	})


	// Newsletter
	$("#newsletterSubmit").click(function (e) {
		e.preventDefault();
		let email = $("#email");

		checkMail(email);

		if (sending) { return };

		if (checkMail(email)) {
			sending = true;
			jQuery.ajax({
				url: newsletterUrl,
				method: "POST",
				data: { email: email.val() },
				success: function (result) {
					sending = false;
					if (result == 1) {
						$("form").trigger("reset");
						$("#newsletterSubmit").addClass("success");
						setTimeout(() => {
							$("#newsletterSubmit").removeClass("success");
						}, 5000);
					} else {
						$(email).addClass("wrong");
						setTimeout(() => {
							$(email).removeClass("wrong");
						}, 5000);
					}
				}
			})
		}
	})


	// Demo
	$("#demoSubmit").click(function (e) {
		e.preventDefault();
		let email = $("#email2");

		checkMail(email);

		if (sending) { return };

		if (checkMail(email)) {
			sending = true;
			jQuery.ajax({
				url: demoUrl,
				method: "POST",
				data: { email: email.val() },
				success: function (result) {
					sending = false;
					if (result == 1) {
						$("form").trigger("reset");
						$("#demoSubmit").addClass("success");
						setTimeout(() => {
							$("#demoSubmit").removeClass("success");
						}, 5000);
					} else {
						$(email).addClass("wrong");
						setTimeout(() => {
							$(email).removeClass("wrong");
						}, 5000);
					}
				}
			})
		}
	})

})