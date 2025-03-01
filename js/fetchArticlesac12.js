$(document).ready(function () {

    const baseUrl = window.location.origin;
	let phpUrl;

	if (baseUrl.indexOf("localhost") >= 0) {
		phpUrl = baseUrl + "/spacecatch.io/php/fetchArticles.php" 
	} else {
		phpUrl = baseUrl + "/php/fetchArticles.php"
	}

    let page_num;

    filter_press();


    function filter_press(page) {
        $.ajax({
            url: phpUrl,
            method: "POST",
            data: {page: page},
            success: function(data) {
                $(".pressArticles").html(data);
            }
        })
    }


})