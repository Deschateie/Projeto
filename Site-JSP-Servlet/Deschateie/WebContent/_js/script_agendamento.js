/*
VARIAVEIS GLOBAIS
*/
var dia;
var horario;


/* ISSO VAI VIM DO BANCO DE DADOS */

var objTexto = {
	titulo: ["primeiro-titulo", "segundo-titulo"],
	texto: ["lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi", "lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi lreom lroem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium earum, perferendis cum vel suscipit porro officia repellendus dignissimos quos tempore nemo rem facilis provident necessitatibus architecto iusto atque amet ipsum! 	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates blanditiis repellat quibusdam labore. Saepe sapiente ad velit fuga, similique commodi"]
}

//(objTexto);

var docArtigo = document.querySelector(".content_article");

function criarArtigo(){
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
		alerta("Erro..", "Sem artigos", "error");
	}
}

/* Funções Gerais */

function criarElemento(elemento){
	return document.createElement(elemento);
}

function addClass(elemento, classe){
	elemento.classList.add(classe);
}

/* Criando o acessador do moment */
var dataCalendario = moment();
/* Pegando os dias das semanas */
var weekdays = moment.weekdays();
var weekdaysEncurtado = moment.weekdaysShort();
/* Pegar os meses */
var meses = moment.months();
/* Setando as configurações do brasil */
dataCalendario.locale('pt-br')

/*  
CORE DO SCRIPT
CHAMANDO AS FUNÇÕES E 
RODANDO
*/
window.onload = function() {
	/*Quando carregar a pagina excuta os comandos*/

	// Criando os artigos
	criarArtigo();

	/*Criando os dias da semana (Seg, Ter, Qua...) */
	addWeekdays();


	/* Adicionando os dias do mes */
	addDiasMes();

	/* Adicionando o mes atual */
	addMes(mes());

	/* Adicionando o Ano */
	setAno();

	/* MONTANDO O CLICK DOS DIAS */
	clickSetHorario();

	/* ADICIONANDO OS HORARIOS */
	buscarHorarioDisponivel(diaAtual());

	/* Setando o dia atual no obj de horario */
	dia = diaAtual();
	horario = null;
}


/* Funções */
function ano(){
	return dataCalendario.format('Y');
}
var mesIndex = parseInt(dataCalendario.format('MM')) - 1;
function mes(){
	return dataCalendario.format('MMMM');
}

function diasMeses(){
	return dataCalendario.daysInMonth();
}

function dataAtual(){
	return dataCalendario.get('date');
}

function diaAtual(){
	return dataCalendario.format('D');
}

function primeirosDiasMes(){
	let dataContext = dataCalendario;
	let primeirosDias = moment(dataContext).startOf('month').format('d');
	return parseInt(primeirosDias);
}

/*
MONTANDO OS DIAS DA SEMANA
Seg. Ter. Qua. Qui. Sex. Sab. Dom.
*/

var ulWeekdays = document.querySelector(".weekdays");
function addWeekdays(){
	weekdaysEncurtado.forEach(function(weekdayText){
		var weekdaysLi = criarElemento("li");
		weekdaysLi.textContent = weekdayText;
		ulWeekdays.appendChild(weekdaysLi);
	});
}

var ulDays = document.querySelector(".days");
function addPrimeirosDias(){
	for(var i=0; i < primeirosDiasMes(); i++){
		var weekdayLi = criarElemento("li");
		weekdayLi.textContent = "";
		ulDays.appendChild(weekdayLi);
	}
}

function addDiasMes(){
	ulDays.innerHTML = "";
	/* Adicionando os primeiros dias do mes, os dias que na verdade são dias do mes passado */
	addPrimeirosDias()
	for(var i=1; i <= diasMeses(); i++){
		criarElemetoDias(i);
	}
}

function criarElemetoDias(index){
	var weekdayLi = criarElemento("li");
	let className = (index == diaAtual() ? "active" : null);
	addClass(weekdayLi, className);
	addClass(weekdayLi, "li-dias");
	weekdayLi.textContent = index;
	ulDays.appendChild(weekdayLi);
}


/*<span id="calendario-year"></span>*/
var mesAtual = document.querySelector(".mes-atual");
function addMes(mes){
	mesAtual.textContent = mes;
}

/* Criar Ano */
var spanAno = document.querySelector(".ano-atual");
function setAno(){
	spanAno.textContent = ano();
}

/* Mudar os meses */
var btnNextMes = document.querySelector(".btn-next-dia");
var btnPrevMes = document.querySelector(".btn-prev-dia");

btnNextMes.addEventListener("click", function(evt){
	if(mesIndex < 11){
		mesIndex++;
	}else{
		mesIndex = 0;
	}
	addMes(meses[mesIndex]);
	updateDiasMes(meses[mesIndex]);
	clickSetHorario();
	buscarHorarioDisponivel(diaAtual());
});

/* Regredindo */
btnPrevMes.addEventListener("click", function(evt){
	if(mesIndex < 1){
		mesIndex = 11;
	}else{
		mesIndex--;
	}
	addMes(meses[mesIndex]);
	updateDiasMes(meses[mesIndex]);
	clickSetHorario();
	buscarHorarioDisponivel(diaAtual());
});

/* Setando o mes */
function setMes(data){
	let mesN = meses.indexOf(data);
	let context = Object.assign({}, dataCalendario);
	context = moment(context).set('month', mesN);
	dataCalendario = context;
	addDiasMes();
}

/* Mudar os dias quando muda o mes */
function updateDiasMes(data){
	setMes(data);
}


function clickSetHorario(){
	var lisDias = document.querySelectorAll(".li-dias");
	lisDias.forEach(function(btnDia, index) {
		btnDia.addEventListener("click", evt => {
			var active = document.querySelector('.active');
			var textContentDia = btnDia.textContent;
			if(active != null){
				active.classList.remove('active');
				addClass(btnDia, 'active');
				buscarHorarioDisponivel(textContentDia);
			}else{
				addClass(btnDia, 'active');
				buscarHorarioDisponivel(textContentDia);
			}
			horario = null;
			dia = textContentDia;
		});
	});
}

			
function buscarHorarioDisponivel(data){
	var objHorario = temposAtendimentos[parseInt(data) - 1];
	montaHorario(objHorario); 
}

var divButtons = document.querySelector('.buttons');
function montaHorario(objs){
	divButtons.innerHTML = "";
	if(objs != null && objs != undefined){
		objs.objHora.forEach(function(objHora, index) {
			var span = criarElemento('span');
			addClass(span, 'button');
			addClass(span, (objHora.disponivel == true)? 'disponivel' : 'marcado');
			span.textContent = objHora.horario;
			divButtons.appendChild(span);
		});
		/* ADICIONAR CLICK NO BOTÃO DE HORARIO */
		var spans = divButtons.querySelectorAll(".button");
		spans.forEach(function(span, index) {
			span.addEventListener("click", function(evt){
				console.log();
				if(span.className.indexOf("disponivel") > 0){
					horario = span.textContent;
					addClass(span, "selecionado");
				}else{
					alerta("Oops...","Horario indisponivel", "warning");
				}
			});
		});
	}else{
		divButtons.innerHTML = "<b>Nenhum horário disponivel</b>";
	}
}


/* MARCANDO A CONSULTA */
var marcarConsulta = document.querySelector("#marcar-consulta");

marcarConsulta.addEventListener("click", function(evt){
	if(horario != null && dia != null && parseInt(dia) >= parseInt(diaAtual())){
		alerta("Sucesso", "Ok, marcado para o dia " + dia + " ás " + horario + " horas.", "success", true);
	}else{
		alerta("Erro..", "Escolha o dia e o horario válidos", "error");
	}
});

/* OBJ DE HORARIO */
// vai vim do banco de dados
var temposAtendimentos = [
	{objHora:[
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]},
	{objHora: [
		{
			horario: '12:00',
			disponivel: true
			
		},
		{
			horario: '12:30',
			disponivel: false
		},
		{
			horario: '13:00',
			disponivel: false
		},
		{
			horario: '13:30',
			disponivel: true
		},
		{
			horario: '14:00',
			disponivel: true
		}
	
	]}

];

console.log(temposAtendimentos);