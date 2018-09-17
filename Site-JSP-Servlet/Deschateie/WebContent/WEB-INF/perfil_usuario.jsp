<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Perfil</title>
</head>
<body>
	
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Perfil</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
    <link rel="stylesheet" href="_css/bulma.css">
    <link rel="stylesheet" href="_css/estilo.css">
  </head>
<body>
<%@ include file="navbar.jsp" %>
<main>
		<div class="container">
			<!--<form action="atualizarUsuario" method="POST">
				<div>
					<h2 class="has-text-centered has-text-weight-bold">Seus dados pessoais:</h2>
					<div class="field">
						<label class="label">Nome completo:</label>
						<div class="control">
							<input class="input" type="text" placeholder="Digite seu nome" value="${usuarioLogado.nome}" required>
						</div>
					</div>
					<div class="field">
						<label class="label">Username:</label>
						<div class="control">
							<input class="input" type="text" placeholder="Digite seu username" value="${usuarioLogado.username}" required>
						</div>
					</div>
					<div class="field">
						<label class="label">Email:</label>
						<div class="control has-icons-left">
							<input class="input" type="text" placeholder="Digite seu email" value="${usuarioLogado.email}" required>
							<span class="icon is-small is-left">
								<i class="fas fa-envelope"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Senha:</label>
						<div class="control">
							<input class="input" type="password" placeholder="Digite sua senha" value="${usuarioLogado.senha}" required>
						</div>
					</div>
						<div class="group_input">
							<label class="label right">Data de nascimento:</label>
							<div class="control">
								<input class="input" type="text" value="${usuarioLogado.dataNasc}" required>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<div class="control">
								<input class="input" type="hidden" id="codigo" required value="${usuarioLogado.codigo}">
							</div>
						</div>
						<div class="group_input">
							<div class="control">
								<input class="input right" type="hidden" id="nivelPermissao" value="${usuarioLogado.nivelPermissao}" required>
							</div>
						</div>
					</div>
					<div class="field">
						<button class="button is-success is-fullwidth" type="submit">Atualizar</button>
					</div>
				</div>
			</form>-->
			<form action="atualizarUsuario" method="POST">
				<div>
					<h2 class="has-text-centered has-text-weight-bold">Seus dados pessoais:</h2>
					<div class="field">
						<label class="label">Nome completo:</label>
						<div class="control has-icons-left">
							<input class="input" id="nome" type="text" name="nome" placeholder="Digite seu nome" value="${usuarioLogado.nome}" required>
							<span class="icon is-small is-left">
								<i class="fas fa-user"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Username:</label>
						<div class="control has-icons-left">
							<input class="input" type="text" name="username" value="${usuarioLogado.username}" placeholder="Digite seu username" required>
							<span class="icon is-small is-left">
								<i class="fas fa-user-plus"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Email:</label>
						<div class="control has-icons-left">
							<input class="input" name="email" type="text" value="${usuarioLogado.email}" placeholder="Digite seu email" required>
							<span class="icon is-small is-left">
								<i class="fas fa-envelope"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Senha:</label>
						<div class="control has-icons-left">
							<input class="input" type="password" name="senha" value="${usuarioLogado.senha}" placeholder="Digite sua senha" required>
							<span class="icon is-small is-left">
								<i class="fas fa-key"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label class="label">Gênero:</label>
							<div class="control has-icons-left">
								<select class="select-input" name="genero">
									<option value="${usuarioLogado.genero}">${usuarioLogado.genero}</option>
									<option value="masculino">Masculino</option>
									<option value="feminino">Feminino</option>
									<option value="outros">Outros</option>
								</select> 
								<span class="icon is-small is-left">
									<i class="fas fa-venus-mars"></i>
								</span>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label  class="label">Data de nascimento:</label>
							<div class="control has-icons-left">
								<input class="input" type="text" placeholder="Data de nascimento" name="dataNasc" id="dataNasc"value="${usuarioLogado.dataNasc}">
								<span class="icon is-small is-left">
									<i class="far fa-calendar-alt"></i>
								</span>
							</div>
						</div>
					</div>
					<div class="field">
						<button class="button is-success is-fullwidth" type="submit">Atualizar</button>
					</div>
				</div>
			</form>
		</div>
	</main>
	<%@ include file="footer.jsp"%>

	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.26.11/dist/sweetalert2.all.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/script_cadastro_psicologo.js"></script>
	<script src="_js/jquery.mask.js"></script>
	<script src="_js/validaForm.js"></script>
  </body>
</html>