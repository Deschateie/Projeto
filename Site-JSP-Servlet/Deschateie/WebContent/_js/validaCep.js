function buscaCep () { // Buscando o CEP pelos Correios
	var cep = document.querySelector('#cep').value;// Preservando o '00.000.000/0000-00' 'THIS' do obj referenciado no 'Data()'


	// return formataCampo(/^[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]/);
	if (/^[0-9]{5}-[0-9]{3}$/.test(cep)) { // Validando o CEP, criando uma REGEX
		// jQuery(document).ready(function(){
		//   jQuery("#inputCep").mask("99999-999")
		// })
		// Validando o CEP, criando uma REGEX
		$.getJSON('http://viacep.com.br/ws/' + cep + '/json/',  (endereco) => { // Função padrão com JQuery para procurar CEP pelos Correios
			if(endereco.localidade != undefined && endereco.localidade != null){
				console.log("CEP Valido.");
			}else{
				alerta("Erro!", "CEP informado é inválido.", "warning");
			}
		});
	}
}