
/*FIM
/* ISSO VAI VIM DO BANCO DE DADOS */

var objTexto = {
	titulo: ["primeiro-titulo", "segundo-titulo"],
	texto: ["lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi", "lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi"]
}

//(objTexto);

var docArtigo = document.querySelector(".content_article");

window.onload = function() {
	if (objTexto.titulo.length > 0 && objTexto.texto.length > 0) {
		/*
		textos.forEach(function(texto){
			var paragrafo = criarElemento('p');
			addClass(paragrafo, 'text-artigo');
			paragrafo.textContent = texto;
			docArtigo.appendChild(paragrafo);
		});
		*/
		objTexto.titulo.forEach(function(titulo, index){
			//(titulo);
			//(index);
			//(objTexto.texto[index]);

			/* Criando elementos */
			var divTitle = criarElemento('div');
			var divContentArticle = criarElemento('div');
			var paragrafo = criarElemento('p');
			var titulo = criarElemento('label');

			/* Adicionando classes aos Elementos */
			addClass(divTitle, 'title');
			addClass(divContentArticle, 'content_article');
			addClass(paragrafo, 'text-artigo');
			addClass(titulo, 'label');

			/* adicionando conteudo */
			paragrafo.textContent = objTexto.texto[index];
			titulo.textContent = objTexto.titulo[index];

			/* Adicionando os filhos => appendChild */
			divTitle.appendChild(titulo);
			divContentArticle.appendChild(paragrafo);

			docArtigo.appendChild(divTitle);
			docArtigo.appendChild(divContentArticle);


		});

	}else{
		alert("sem artigos");
	}
}

function criarElemento(elemento){
	return document.createElement(elemento);
}

function addClass(elemento, classe){
	elemento.classList.add(classe);
}



/* CALENDARIO */
//var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

var meses = moment.months();
var dias = moment().format('D');

////(28 + parseInt(firstDayOfMonth()));
/*
for(var i=0; i<firstDayOfMonth();i++){
	dias.unshift("");
}
*/
var calendario = document.querySelector(".calendario");
var spanAno = calendario.querySelector("#calendario-year");
var ulWeekdays = calendario.querySelector(".weekdays");
//(calendario);
//(meses);
//(dias);

var btnNextDia = calendario.querySelector(".btn-next-dia");
var btnPrevDia = calendario.querySelector(".btn-prev-dia");


spanAno.textContent = moment().year();
var indexMesEscolhido = moment().month();
var textoMes = calendario.querySelector(".mes-atual");
var mesEscolhido = criarElemento('p');
mesEscolhido.textContent = meses[indexMesEscolhido];
//mesEscolhido.textContent = moment();
//(moment());

textoMes.appendChild(mesEscolhido);

var textoDias = calendario.querySelector(".days");
addWeekdays();
//updateDias();
updateBtnDia();

var diasMesNew = [];
console.log(diasMesNew);
function criarDiasNew(){
	for(var i=1; i<daysInMonth(); i++){
		var className = (i == parseInt(moment().format('D'))) ? "active": "li-dias";
		criarDias(i, className);
	}
}
console.log(criarDiasNew());

function addWeekdays(){
	var weekdays = moment.weekdaysShort();
	weekdays.forEach(function(weekdayText){
		var weekdaysLi = criarElemento("li");
		weekdaysLi.textContent = weekdayText;
		ulWeekdays.appendChild(weekdaysLi);
	});
}


function updateMeses(){
	mesEscolhido.textContent = meses[indexMesEscolhido];
	//mesEscolhido.textContent = moment();
	updateDias();
	updateBtnDia();
}

function updateDias(){
	console.log(moment().format('d'));
}

btnNextDia.addEventListener('click', function(){
	indexMesEscolhido++;

	if (indexMesEscolhido >= 12) {
		indexMesEscolhido = 0;
	}

	updateMeses();

	//(indexMesEscolhido);
});

btnPrevDia.addEventListener('click', function(){
	indexMesEscolhido--;

	if (indexMesEscolhido < 0) {
		indexMesEscolhido = 11;
	}

	updateMeses();

	//(indexMesEscolhido);
});


function criarDias(dia, className){
	var li = criarElemento('li');
	addClass(li, className);
	li.textContent = dia;
	textoDias.appendChild(li);
	//diasMesNew.push(dia);
}

var diaMarcado;
function updateBtnDia(){
	var btnDias = calendario.querySelectorAll(".li-dias");

	btnDias.forEach( function(btnDia, index) {
		btnDia.addEventListener('click', function(e){
			var active = calendario.querySelector('.active');
			if(active != null){
				active.classList.remove('active');
				addClass(btnDia, 'active');
				diaMarcado = this.textContent;
			}else{
				addClass(btnDia, 'active');
				diaMarcado = this.textContent;
			}

			//queryTempoDisponivel();

		});
	});
}




/* TEMPO DE ATENDIMENTO */

var divButtons = document.querySelector('.buttons');

// vai vim do banco de dados
var temposAtendimentos = ['12:30', '13:00', '14:30', '15:00', '15:30', '16:00'];


temposAtendimentos.forEach(function(tempoAtendimento){
	//(tempoAtendimento);
	criarAtendimento(tempoAtendimento);
});

function criarAtendimento(horario){
	var span = criarElemento('span');
	addClass(span, 'button');
	addClass(span, 'disponivel');
	span.textContent = horario;
	divButtons.appendChild(span);
}

var tempoMarcado; 
var buttons = divButtons.querySelectorAll('.button');
buttons.forEach(function(button){
	button.addEventListener('click', function(e){
		//alert(e.target);
		// fazer o mesmo que o dia remover e add classe
		addClass(button, "selecionado");
		tempoMarcado = this.textContent;
	});
});


var marcarConsulta = document.querySelector("#marcar-consulta");

marcarConsulta.addEventListener("click", function(evt){
	if(tempoMarcado != null && diaMarcado != null){
		alert("Ok, marcado para o dia " + diaMarcado + " ás " + tempoMarcado + " horas.");
	}else{
		alert("Escolha o dia e o horario");
	}
});


function firstDayOfMonth(){
	var dateContext = moment();
	var primeiroDia = moment(dateContext).startOf('month').format('d');
	return primeiroDia;
}

//console.log(moment().startOf().format('d'));


moment.locale('pt-br');
//(moment().locale()); // pt-BR
//(moment().daysInMonth());

function daysInMonth(){
	return moment().daysInMonth();
}


/*
	textoDias.innerHTML = '';
	//(textoDias);
	//dias.unshift("78");
	//(dias);
	dias.forEach(function(dia, index){
		if(meses[indexMesEscolhido] == 'Fevereiro'){
			if (index < 28 + parseInt(firstDayOfMonth())) {
				criarDias(dia);
			}
		}else if((indexMesEscolhido % 2) == 0){
			if(index < 31 + parseInt(firstDayOfMonth())){
				criarDias(dia);
			}
		}else{
			if(index < 30 + parseInt(firstDayOfMonth())){
				criarDias(dia);
			}
		}
	});
*/
