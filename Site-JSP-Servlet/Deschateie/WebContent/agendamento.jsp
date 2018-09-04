<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Deschateie</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
    <link rel="stylesheet" href="_css/bulma.css">
    <link rel="stylesheet" href="_css/estilo.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  </head>
  <body>
	<nav>
		<div class="menu_pattern" id="topo">
			<div class="container is-widescreen">
				<div class="tabs is-centered">
				  <ul>
				    <li><a href="index.html">Home</a></li>
				    <li><a href="index.html#quemSomos" class="scrollSuave">Quem Somos</a></li>
				    <li><a href="login.html">Fazer Login</a></li>
				    <li><a class="btn_cvs" href="chatbot.html">Conversar</a></li>
				  </ul>
				</div>
			</div>
		</div>
	</nav>
	<main>

		<div class="container">
		<!-- Parte sobre a biografia do Psicologo -->
			<div class="user_bio_content">
				<div class="image-user-bio">
					<img src="https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg" alt="#">
				</div>
				<div class="simple-bio">
					<p><b>Nome: </b>Dr. Israel Mandela</p>
					<p><b>Formação: </b>Bioquimico Sênior</p>
					<p><b>Idade: </b>46 anos</p>
					<p><b>Sexo: </b>Masculino</p>
				</div>
				<div class="bio-text">
					<label class="label">Biografia:</label>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsa voluptates iure rem porro recusandae possimus minima quia impedit velit dolor dignissimos iusto, consectetur magni quod dolorum explicabo cum earum!</p>
				</div>
			</div>
		<!-- Fim sobre a biografia do psicologo -->
		
		<!-- Agendamento -->
		<div class="content_query">
			<div class="calendario">
				<button class="btn-prev-dia"><i class="fas fa-angle-left"></i></button>
				<div class="calendario-content">
					<div class="month">      
					  <ul>
					    <li class="mes-atual"></li>
					    <li class="ano-atual"></li>
					  </ul>
					</div>
					<ul class="weekdays">
					  	<!--
						<li>Seg.</li>
						<li>Ter.</li>
						<li>Qua.</li>
						<li>Qui.</li>
						<li>Sex.</li>
						<li>Sab.</li>
						<li>Dom.</li>
						-->
					</ul>
					<ul class="days">
					  	<!--
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
						<li>7</li>
						...
						-->
					</ul>
				</div>
				<button class="btn-next-dia"><i class="fas fa-angle-right"></i></button>
			</div>
			<div class="tempo">
				<div class="time">
					<div class="buttons">
					</div>
					<div class="legend">
						<p class="text_legend"><div class="background disponivel"></div>Dísponivel</p>
						<p class="text_legend"><div class="background marcado"></div>Indisponivel</p>
					</div>
				</div>
				<div class="action_add">
					<button class="add" id="marcar-consulta">Agendar</button>
				</div>
			</div>
		</div>
		<!-- Fim agendamento -->

		<!-- Inicio artigos do proprio psicologo -->
			<div class="artigos">
				<div class="title">
					<label class="label"></label>
				</div>
				<div class="content_article"></div>
				<div class="action_article">
					<button class="btn_action_article">Ler Mais</button>
				</div>
			</div>
		</div>
		<!-- Fim artigos do psicologo -->
	</main>
	
	<%@ include file="footer.jsp"%>
	
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.26.11/dist/sweetalert2.all.min.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/moment.js"></script>
	<script src="_js/moment_locale_pt-br.js"></script>
	<script src="_js/script_agendamento.js"></script>
  </body>
</html>