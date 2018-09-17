/* VALIDAÇÃO FORMULARIO */
$(document).ready(function(){
	$('#cep').mask('00000-000');
	$('#cpf').mask('000.000.000-00', {reverse: true});
	$('#vl_consulta').mask('##0,00'), {reverse: true};
	$('#telefone').mask('(00) 0000-0000');
	$('#celular').mask('(00) 00000-0000');
	$('#crp').mask('#0');
	$('#rg').mask('000.000.000-A', {reverse: true});
	$('#dataNasc').mask('00/00/0000');	
	$('#consultas').mask('##0');
});