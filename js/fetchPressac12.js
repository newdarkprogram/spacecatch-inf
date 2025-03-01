$(document).ready(function () {

    const baseUrl = window.location.origin;
	let phpUrl;

	if (baseUrl.indexOf("localhost") >= 0) {
		phpUrl = baseUrl + "/spacecatch.io/php/fetchPress.php" 
	} else {
		phpUrl = baseUrl + "/php/fetchPress.php"
	}

    let page_num;
    let lang = "English";
    let text;
	const lang_el = $(".press--lang");
	const lang_class = "press--lang--active";
	const lang_heading = $(".press--lang--heading");

	lang_el.click(function(){
		lang = $("img", this).attr("data-lang");
		text = $("img", this).attr("alt");
		lang_el.removeClass(lang_class);
		$(this).addClass(lang_class);
		$(lang_heading).text(text);
		filter_press(page_num);
	})

    filter_press();


    function filter_press(page) {
        $.ajax({
            url: phpUrl,
            method: "POST",
            data: {page: page, lang: lang},
            success: function(data) {
                $(".pressArticles").html(data);
                $(".pressArticles--pagination--li").click(function(e) {
                    page_num = (e.target.id).split("-")[1];
                    if (page != page_num && page != "undefined") {
                        filter_press(page_num);
                        $('html, body').animate({ scrollTop: $(".pressArticles").offset().top - 50}, 300)
                    }
                });
                $(".pressArticles--pagination--next").click(function() {
                    if (page) {
                        filter_press(parseInt(page)+1);
                    } else {
                        filter_press(2);
                    }
                    $('html, body').animate({ scrollTop: $(".pressArticles").offset().top - 50}, 300)
                });
            }
        })
    }


})