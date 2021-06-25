$(window).scroll(function(){
    var wScroll = $(this).scrollTop(); 

    // Index.html
    if( wScroll > $('.container').offset().top - 100 ) {
        $('.container .row').addClass('muncul');
    }

    if( wScroll > $('.about').offset().top - 400 ) {
        $('.about .row').addClass('muncul');
    }

    if( wScroll > $('.project').offset().top - 550 ) {
        $('.project').addClass('muncul');
    }

    if( wScroll > $('.wedo .cards').offset().top - 500 ) {
        $('.wedo .cards').addClass('muncul');
    }

    if( wScroll > $('.bidang .card').offset().top - 400 ) {
        $('.bidang .card').addClass('muncul');
    }

});