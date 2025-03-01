$(document).ready(function () {

    // Year
    let year = new Date().getFullYear();
    $(".footer--year").text(year);


    // Menu
    const elements = $("html, .nav, .nav--btn, .nav--mobile, .hpHeader--flex")
    const menuBtn = $(".nav--btn");
    const links = $(".nav--mobile--a[href*='/'], .nav--mobile--submenu--a");

    menuBtn.click(() => {
        elements.toggleClass("open");
        window.scrollTo(0, 0);
    });
    
    links.click(() => {
        elements.toggleClass("open");
    })


    // Submenu
    let elementOld = null;
    const openClass = "open";

    function toggleSubmenu(element) {
        let content = element.querySelector(".nav--mobile--submenu--div");

        if (elementOld != null) {
            elementOld.classList.remove(openClass);
            contentOld = elementOld.querySelector(".nav--mobile--submenu--div");
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

    $(".nav--mobile--submenu").click(function(){
        toggleSubmenu(this);
    })


});