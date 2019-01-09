$(function() {
    var item = $(".nav-item");
    item.click(function() {
        item.removeClass("active");
        $(this).addClass("active");
    });

});

$(function() {
    var width = $(window).width();
    if (width > 767) {
        $('#recipeCarousel').carousel({
            interval: 4000
        })

        $('.carousel .carousel-item').each(function() {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < 2; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }
});

$(function() {
    $(document).ready(function() {
        $('.gmaps').gmaps();
    });
});