var inputNome = document.querySelector("#nome");

inputNome.addEventListener("invalid", (function(){
	return function(e){
		e.preventDefault();
		alert("Conseguir testar o que queria!");
	}
})(), true);