// fullPage.js controls
$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollOverflow: true,
        sectionsColor: ['black', '#0c0c0c'],
        afterLoad: function(index){
            if(index === "secondPage") {
                $(this).resize();
            }
        }
    });
});

// popup on page loading
$(document).ready(function() {
    $(".overlay, .popup").fadeToggle();
});