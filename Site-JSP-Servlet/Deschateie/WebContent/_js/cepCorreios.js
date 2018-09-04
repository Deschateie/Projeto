function buscaCep () { // Buscando o CEP pelos Correios
  var cep = document.querySelector('#cep').value;// Preservando o '00.000.000/0000-00' 'THIS' do obj referenciado no 'Data()'
  var bairro = document.querySelector('#bairro');
  var localidade = document.querySelector('#localidade');
  var logradouro = document.querySelector('#logradouro');
  var uf = document.querySelector('#uf');
  var tipo = document.querySelector('#tipo');

  // return formataCampo(/^[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]/);
  if (/^[0-9]{5}-[0-9]{3}$/.test(cep)) { // Validando o CEP, criando uma REGEX
    // jQuery(document).ready(function(){
    //   jQuery("#inputCep").mask("99999-999")
    // })
    // Validando o CEP, criando uma REGEX
    $.getJSON('http://viacep.com.br/ws/' + cep + '/json/',  (endereco) => { // Função padrão com JQuery para procurar CEP pelos Correios
      if(endereco.localidade != undefined && endereco.localidade != null){
        // Trazendo os dados e 'Setando' nas variaveis declaradas
        bairro.value = endereco.bairro;
        localidade.value = endereco.localidade;
        uf.value = endereco.uf;
        /* Separando logradouro em dois */
        var log = endereco.logradouro;
        var tipo_endereco = log.substring(0, log.indexOf(" "));
        tipo.value = tipo_endereco;
        var log = log.substring(log.indexOf(" "));
        logradouro.value = log;
      }else{
        alerta("Erro!", "CEP informado é inválido.", "warning");
      }
    });
  }
}