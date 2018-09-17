$('.go_form_cadastro').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

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

function alerta(titulo, msg, tipo, cancelar=false){
	swal({
		position: 'top',
		type: tipo,/* 3 tipos => error, warning e success */
		title: titulo,
		text: msg,
		showCancelButton: cancelar,
		cancelButtonColor: '#d33',
		confirmButtonColor: '#37B686',
		allowEscapeKey: false,
		allowEnterKey: false,
	})
}