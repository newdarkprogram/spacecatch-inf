$(document).ready(function () {

	let elementOld = null;
    const openClass = "faq--open";
    const faqMore = $(".hpFaq--hidden");
    const faqMoreBtn = $(".hpFaq--btn");

    function toggleAnswer (element) {
        let content = element.querySelector(".faq--answer");

        if ($(element).parent().hasClass('hpFaq--hidden')) {
            faqMore.css("max-height", content.scrollHeight + $(faqMore).prop('scrollHeight') + "px");
        }

        if (elementOld != null) {
            elementOld.classList.remove(openClass);
            contentOld = elementOld.querySelector(".faq--answer");
            contentOld.style.maxHeight = "0px";
        }

        if (elementOld !== element) {
            element.classList.add(openClass);
            content.style.maxHeight = content.scrollHeight + "px";
            elementOld = element;
        } else {
            elementOld = null;
        }
    }

    $(".faq").click(function () {
        toggleAnswer(this);
    })

    function toggleAll () {
        if (faqMore.css("max-height") == "0px") {
            faqMore.css("max-height", $(faqMore).prop('scrollHeight') + "px");
            faqMoreBtn.text($(faqMoreBtn).data("less"));
        } else {
            faqMore.css("max-height", "0px");
            faqMoreBtn.text($(faqMoreBtn).data("all"));
        }
    }

    faqMoreBtn.click(function(){
        toggleAll();
    })


})