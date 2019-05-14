function scrolling(pos) {
    $('html, body').animate({'scrollTop' : '$(pos).offset().top+px'}, 500);
}
