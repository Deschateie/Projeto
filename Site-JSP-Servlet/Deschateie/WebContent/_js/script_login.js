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








var formLogin = document.querySelector(".form");
var login = formLogin.login;
var senha = formLogin.senha;
var btnSubmitLogin = document.querySelector('.btn-submit-login');
btnSubmitLogin.addEventListener('click', function(e){
	
	e.preventDefault();
	if(validar())formLogin.submit();
	
	
});


login.addEventListener("focus", function(e){
	login.style.borderBottom = "2px solid #37B686";
});

senha.addEventListener("focus", function(e){
	senha.style.borderBottom = "2px solid #37B686";
});

login.addEventListener("focusout", function(){
	login.style.borderBottom = "2px solid #333";
});

senha.addEventListener("focusout", function(){
	senha.style.borderBottom = "2px solid #333";
});


function validar(){
	if(login.value == ""){
		alerta("Falha no login", "Dados invalidos", "error");
		login.style.borderBottom = "2px solid lightcoral";
		return false;
	}else if(senha.value == ""){
		alerta("Falha no login", "Dados invalidos.", "error");
		senha.style.borderBottom = "2px solid lightcoral";
		return false
	}else{
		return true
	}
}




