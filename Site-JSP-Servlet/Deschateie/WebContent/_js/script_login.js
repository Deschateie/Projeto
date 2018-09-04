var formLogin = document.querySelector(".form");
var email = formLogin.email;
var senha = formLogin.senha;
var btnSubmitLogin = document.querySelector('.btn-submit-login');
btnSubmitLogin.addEventListener('click', function(e){
	
	e.preventDefault();
	if(validar())formLogin.submit();
	
	
});


email.addEventListener("focus", function(e){
	email.style.borderBottom = "2px solid #37B686";
});

senha.addEventListener("focus", function(e){
	senha.style.borderBottom = "2px solid #37B686";
});

email.addEventListener("focusout", function(){
	email.style.borderBottom = "2px solid #333";
});

senha.addEventListener("focusout", function(){
	senha.style.borderBottom = "2px solid #333";
});


function validar(){
	if(email.value == ""){
		alerta("Falha no login", "Dados invalidos", "error");
		email.style.borderBottom = "2px solid lightcoral";
		return false;
	}else if(senha.value == ""){
		alerta("Falha no login", "Dados invalidos.", "error");
		senha.style.borderBottom = "2px solid lightcoral";
		return false
	}else{
		return true
	}
}




