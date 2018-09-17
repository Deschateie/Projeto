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
	<%@ include file="WEB-INF/navbar.jsp" %>
	<main>
		<div class="is-widescreen form-main-content-login">
			<div class="form-login">
				<form action="realizarLogin" method="POST" class="form">
					<h2 class="title-login">Realizar Login</h2>
					<div class="form-group">
						<input type="text" name="login" class="input-login" id="username-info" placeholder="Username...">
					</div>
					<div class="form-group">
						<input type="password" name="senha" class="input-login" id="senha-info" placeholder="Senha...">
					</div>
					<button class="btn-submit-login">Logar</button>
					<a class="recuperar-senha">Recuperar senha.</a>
				</form>
			</div>
		</div>
	</main>
	<aside>
			<div class="aside-login">
				<div class="aside-main-content-login" id="link-cadastro">
					<div class="header-cadastro">
						<h2>Poderá realizar o cadastro aqui mesmo!</h2>
					</div>
					<div class="formulario-cadastro-usuario">
						<div class="titulo-cadastro-usuario">REALIZAR CADASTRO</div>
						<div class="cadastro-usuario">
							<form action="cadastrarUsuario" method="POST" class="form">
								<div class="form-group">
									<input type="text" class="input-login" placeholder="Nome completo" name="nome" required>
								</div>
								<div class="form-group">
									<input type="email" class="input-login" placeholder="E-mail" name="email" required>
								</div>
								<div class="form-group">
									<input type="text" id="dataNasc" class="input-login" placeholder="Data de nascimento" name="dataNasc" required>
								</div>
								<div class="form-group">
									<input type="text" class="input-login" placeholder="Username" name="username" required>
								</div>
								<div class="form-group">
									<input type="password" class="input-login" placeholder="Senha" name="senha" required>
								</div>
								<div class="form-group">
									<input type="text" class="input-login" placeholder="Url Online de uma foto" name="foto" required>
								</div>
								<div class="form-group">
									<select class="select-input" name="genero">
										<option>Selecione seu gênero</option>
										<option value="masculino">Masculino</option>
										<option value="feminino">Feminino</option>
										<option value="outros">Outros</option>
									</select> 
								</div>
								<button class="btn-submit-login">Cadastrar</button>
							</form>
						</div>
					</div>
				</div>
			</div>
	</aside>
	<%@ include file="WEB-INF/footer.jsp"%>
	
	<div class="go_cadastro">
		<a href="#link-cadastro" class="go_form_cadastro">Cadastrar</a>
	</div>

	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.26.11/dist/sweetalert2.all.min.js"></script>
	<script src="_js/jquery.mask.min.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/validaForm.js"></script>
	<script src="_js/script_login.js"></script>
	<%
		if(request.getAttribute("erro") != null || request.getAttribute("titulo") != null){
	%>
	<script> alerta("<%= request.getAttribute("titulo").toString()%>", "<%= request.getAttribute("texto").toString()%>", "<%= request.getAttribute("status").toString()%>") </script>
	<%
	}
	%>
  </body>
</html>