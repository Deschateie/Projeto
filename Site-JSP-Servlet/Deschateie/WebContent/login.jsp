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
	<%@ include file="navbar.jsp" %>
	<main>
		<div class="is-widescreen form-main-content-login">
			<div class="form-login">
				<form action="realizarLogin" method="POST" class="form">
					<h2 class="title-login">Realizar Login</h2>
					<div class="form-group">
						<input type="text" name="email" class="input-login" id="username-info" placeholder="Username...">
					</div>
					<div class="form-group">
						<input type="password" name="senha" class="input-login" id="senha-info" placeholder="Senha...">
					</div>
					<button class="btn-submit-login">Logar</button>
				</form>
			</div>
		</div>
	</main>
	<aside>
		<div class="container">
			<div class="aside-login">
				<div class="aside-main-content-login">
					<p>[ Algum conteudo aqui. ]</p>
				</div>
			</div>
		</div>
	</aside>
	<footer>
		<div class="container">
			<div class="footer">
				<div class="network">
					<a href="#"><i class="fab fa-instagram"></i></a>
					<a href="#"><i class="fab fa-facebook-messenger"></i></a>
					<a href="#"><i class="fab fa-youtube"></i></a>
				</div>
				<div class="footer-menu">
					<a href="catalogo.html">Catalogo</a>
					<a href="page_especial_menor_idade.html">Pagina menor idade</a>
					<a href="cadastro_usuario.html">Cadastre-se</a>
				</div>
			</div>
		</div>
		<div class="copyright">
			<p>&copy; Todos dirietos reservados</p>
		</div>
		<div class="go_top">
			<a href="#topo" class="go_top_menu">Topo</a>
		</div>
	</footer>

	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.26.11/dist/sweetalert2.all.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/script_login.js"></script>
	<%
		if(request.getAttribute("erro") != null){
	%>
	<script> alerta("<%= request.getAttribute("erro").toString()%>", "Falha no login", "error") </script>
	<%
	}
	%>
  </body>
</html>