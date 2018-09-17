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
  </head>
  <body>
	<nav>
		<div class="banner" id="topo">
			<div class="container is-widescreen menu-tabs">
				<div class="tabs is-centered">
					<input type="checkbox" id="btn_menu">
					<label for="btn_menu">&#9776;</label>
					<ul>
				    	<li class="is-active"><a href="index.jsp">Home</a></li>
				    	<li><a href="#quemSomos" class="scrollSuave">Quem somos</a></li>
				    	<li><a href="login.jsp">Fazer Login</a></li>
				    	<li><a class="btn_cvs" href="chatbot.jsp">Conversar</a></li>
				  	</ul>
				</div>
				<div class="content-item">
					<div class="content-text-banner">
						<h1>Deschateie</h1> 
						<p>Poder� iniciar uma conversa agora mesmo.</p>
					</div>
					<div class="action">
						<a href="chatbot.jsp"><button>Come�ar</button></a>
					</div>
				</div>
			</div>
		</div>
	</nav>
	<main>
		<div class="container main-content">
			<!-- Slideshow container -->
			<div class="slideshow-container">

			  <!-- Full-width images with number and caption text -->
			  <div class="mySlides fade slider">
			    <div class="numbertext">1 / 5</div>
			    <div class="block-content">
			    	<div class="text_content">
			    		<h2>Fa�a o cadastro e tenha mais beneficios.</h2>
			    	</div>
		    		<div class="action_perfomance">
		    			<a href="cadastro_usuario.jsp"><button >Cadastrar</button></a>
		    		</div>
			    </div>
			    <div class="text">Cadastro de Usuario.</div>
			  </div>

			  <div class="mySlides fade slider">
			    <div class="numbertext">2 / 5</div>
			    <div class="block-content">
			    	<div class="text_content">
		    			<h2>Faça parte da nossa tripula��o de voluntários.</h2>
		    		</div>
		    		<div class="action_perfomance">
	    				<a href="cadastro_voluntario.jsp"><button >Cadastrar</button></a>
	    			</div>
			    </div>
			    <div class="text">Cadastro de voluntario.</div>
			  </div>

			  <div class="mySlides fade slider">
			    <div class="numbertext">3 / 5</div>
			   	<div class="block-content">
			    	<div class="text_content">
			    		<h2>Seja o nosso parceiro!</h2>
			    	</div>
		    		<div class="action_perfomance">
	    				<a href="cadastro_psicologo.jsp"><button >Cadastrar</button></a>
	    			</div>
			    </div>
			  	<div class="text">Cadastro de psicologo</div>
			  </div>

		  	  <div class="mySlides fade slider">
		  	    <div class="numbertext">4 / 5</div>
		  	   <div class="block-content">
		  	    	<div class="text_content">
		  	    		<h2>Menor de 18 anos?, n�o se preocupe poder� usar nossa plataforma tranquilamente.</h2>
		  	    	</div>
	  	    		<div class="action_perfomance">
	      				<a href="page_especial_menor_idade.jsp"><button >Saiba mais!</button></a>
	      			</div>
		  	    </div>
		  	    <div class="text">Ajuda aos menores de idade</div>
		  	  </div>
		  	  <div class="mySlides fade slider" id="setembro-amarelo">
		  	    <div class="numbertext">5 / 5</div>
		  	   	<div class="block-content">
		  	    	<div class="text_content">
		  	    		
		  	    	</div>
		  	    </div>
		  	  </div>

			  <!-- Next and previous buttons -->
			  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
			  <a class="next" onclick="plusSlides(1)">&#10095;</a>
			</div>
			<br>

			<!-- The dots/circles -->
			<div class="controls-slider">
			  <span class="dot" onclick="currentSlide(1)"></span> 
			  <span class="dot" onclick="currentSlide(2)"></span> 
			  <span class="dot" onclick="currentSlide(3)"></span> 
			  <span class="dot" onclick="currentSlide(4)"></span> 
			</div>
		</div>
		<div class="other-content" id="quemSomos">
			<div class="container">
				<div class="content">
					<h2>Deschateie</h2>
					<p>O Deschateie nasceu com o propósito de te ouvir e te confortar. Para nós o seu bem-estar é prioridade máxima. Você poderá conversar conosco a hora e onde quiser. Além disso temos excelentes profissionais que estão prontos para te atender e fazer o tratamento ideal para você. E se mesmo assim quiser algo mais pessoal, nós temos parceria com diversos psicólogos e psiquiatras espalhados por toda cidade.</p>

	                <p>Todos profissionais que atendem pelo Deschateie são obrigados a manter todo o sigilo de suas conversas conforme o Código de Ética Profissional do Psicólogo. E assim como os psicólogos nós iremos proteger os seus dados.</p>

	                <p>Conforme o Conselho Federal de Psicologia nós não podemos atender menores de idade sem a aprovação de um responsável. Mas como nosso intuito é ajudar, disponibilizamos a você menor de idade uma pagina toda especial para que você possa encontrar a ajuda necessária para o seu problema.</p>

	                <p class="slogan">Desabafe, Desafogue e Desperte com o Deschateie.</p>
				</div>
			</div>
		</div>
	</main>
	<%@ include file="WEB-INF/footer.jsp"%>


	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/carousel.js"></script>
  </body>
</html>