$( document ).ready(function(){
    var current_slide = "1";

    $('.circle').click(function(){
        var slide_pos = [0, -435, -870, -1305];

        $('.circle').removeClass("clicked")
        $(this).addClass("clicked");
        current_pos = parseInt(this.id) - 1;

        $('#slider .slides').animate({'margin-left': slide_pos[current_pos]}, 1500);

        current_slide = this.id;
    });
});

