var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
$('.go_top_menu').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
