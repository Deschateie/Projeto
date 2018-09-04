
var listItens = document.querySelector('.list_itens');

function criarCard(fotoPerfil, nomePsicologo, descShort, minValueConsulta, maxValueConsulta, linkPsicologo){
	/* CRIANDO A DIV DO CARD */
	var catalagoQuery = criarElemento('div');
	setarAtributo(catalagoQuery, 'class', 'catalogo_query');

	/* DIV */
	var contentCatalogo = criarElemento('div');
	setarAtributo(contentCatalogo, 'class', 'content_catalogo');

	/* DIV IMAGEM */
	var divImage = criarElemento('div');
	setarAtributo(divImage, 'class', 'image');

	var img = criarElemento('img');
	setarAtributo(img, 'id', 'fotoPerfil-info');
	img.src = fotoPerfil;

	var descContent = criarElemento('div');
	setarAtributo(descContent, 'class', 'desc-content');

	var contentBio = criarElemento('div');
	setarAtributo(contentBio, 'class', 'content_bio');

	var nomePsicologoH2 = criarElemento('h2');
	setarAtributo(nomePsicologoH2, 'id', 'nomePsicologo-info');
	nomePsicologoH2.textContent = nomePsicologo;

	var pShortDesc = criarElemento('p');
	setarAtributo(pShortDesc, 'id', 'shortDesc-info');
	pShortDesc.textContent = descShort;

	var divCash = criarElemento('div');
	setarAtributo(divCash, 'id', 'valorConsulta-info');
	setarAtributo(divCash, 'class', 'cash');

	var minValue = criarElemento('b');
	setarAtributo(minValue, 'class', 'min-value');
	minValue.textContent = parseInt(minValueConsulta);

	var maxValue = criarElemento('b');
	setarAtributo(maxValue, 'class', 'max-value');
	maxValue.textContent = parseInt(maxValueConsulta);

	var divRank = criarElemento('div');
	setarAtributo(divRank, 'class', 'rank');

	var pRank = criarElemento('p');
	setarAtributo(pRank, 'class', 'rank_star');

	var actionContent = criarElemento('div');
	setarAtributo(actionContent, 'class', 'action_content');

	var aActionContent = criarElemento('a');
	aActionContent.href = linkPsicologo;

	var btnSubmit = criarElemento('button');
	setarAtributo(btnSubmit, 'class', 'btn_submit');
	

	var iconPlus = criarElemento('i');
	setarAtributo(iconPlus, 'class', 'fas');
	iconPlus.classList.add('fa-plus');
	

	/* NOVOS ELEMENTOS */
	var minValueCard = criarElemento('div');
	setarAtributo(minValueCard, 'class', 'minValueCard');

	var maxValueCard = criarElemento('div');
	setarAtributo(maxValueCard, 'class', 'maxValueCard');

	var separator = criarElemento('p');
	setarAtributo(separator, 'class', 'separator');
	separator.textContent = "-";

	var rs = criarElemento('p');
	setarAtributo(rs, 'class', 'rs');
	rs.textContent = "R$";

	var rs2 = criarElemento('p');
	setarAtributo(rs2, 'class', 'rs');
	rs2.textContent = "R$";


	/* FIM NOVOS ELEMENTOS */

	minValueCard.appendChild(rs);
	minValueCard.appendChild(minValue);
	divCash.appendChild(minValueCard);
	divCash.appendChild(separator);
	maxValueCard.appendChild(rs2);
	maxValueCard.appendChild(maxValue);
	divCash.appendChild(maxValueCard);


	/* ADICIONANDO A TAG <IMG></IMG> */
	divImage.appendChild(img);
	


	/* ADICIONANDO O H2 NA DIV CONTENT BIO */
	contentBio.appendChild(nomePsicologoH2);
	/* ADICIONANDO O P SOBRE O PSICOLOGO NA DIV CONTENT BIO */
	contentBio.appendChild(pShortDesc);
	/* ADICIONANDO O P COM O VALOR DA CONSULTA NA DIV CONTENT BIO */
	contentBio.appendChild(divCash);
	
	/* DESC CONTENT ADICIONANDO O CONTENT BIO */
	descContent.appendChild(contentBio);

	/* ADICIONANDO O P COM O RANK NA DIV AVALIAÇÃO */
	divRank.appendChild(pRank);

	/* ADICIONANDO A AVALIAÇÃO NO DESC CONTENT */
	descContent.appendChild(divRank);

	/* ADICIONANDO O ICONE NO BOTÃO */
	btnSubmit.textContent = " Mais Detalhes ";
	btnSubmit.appendChild(iconPlus);

	/* ADICIONANDO O BOTÃO NO LINK a */
	aActionContent.appendChild(btnSubmit);
	
	
	/* ADICIONANDO O LINK a NA DIV ACTION CONTENT */
	actionContent.appendChild(aActionContent);



	/* ADICIONANDO A DIV IMAGE */
	contentCatalogo.appendChild(divImage);

	/* CONTENT CATALOGO ADICIONANDO A DESC-CONTENT */
	contentCatalogo.appendChild(descContent);

	/* POR ULTIMO ACTION CONTENT */
	/* ADICIONANDO O BUTTON PARA O EVENTO DE AGENDAR */
	contentCatalogo.appendChild(actionContent);


	/* ADICIONANDO  O CONTENT */
	catalagoQuery.appendChild(contentCatalogo);
	
	/* FIM */
	listItens.appendChild(catalagoQuery);
}



function criarElemento(elemento){
	return document.createElement(elemento);
}

function setarAtributo(elemento, atributo, valor){
	elemento.setAttribute(atributo, valor);
}




var fotoPerfilBD = "https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg";
var nomePsicologoBD = "Doutor Felipe Masckarena";
var descShortBD = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, deleniti corporis...";
var minValueConsultaBD = "670";
var maxValueConsultaBD = "4700";
var linkPsicologoBD = "#";

criarCard(fotoPerfilBD, nomePsicologoBD, descShortBD, minValueConsultaBD, maxValueConsultaBD, linkPsicologoBD);

function mostrarPsicologos(){

	$.ajax({
	type: "GET",
	headers: {
	'Accept': 'application/json',
	'Content-Type': 'text/plain'
	},
	dataType: "json",
	url: "http://localhost:3000/api/data/catalogo",
	data: this.reponse,
	success: function (data) {
		data.psicologos.forEach(function(psicologo){
			console.log(psicologo.codigo);
			console.log(psicologo.fotoPerfil);
			console.log(psicologo.nome);
			console.log(psicologo.minPreco);
			console.log(psicologo.maxPreco);
			console.log(psicologo.descricaoCurta);
			criarCard(psicologo.fotoPerfil, psicologo.nome, psicologo.descricaoCurta, parseInt(psicologo.minPreco), parseInt(psicologo.maxPreco), "#");
		});
	}
	});

}

mostrarPsicologos();