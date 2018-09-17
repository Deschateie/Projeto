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
	<%@ include file="WEB-INF/navbar.jsp"%>
	<main>
		<div class="container">
			<form action="cadastrarPaciente" method="POST">
				<div>
					<h2 class="has-text-centered has-text-weight-bold">Cadastro de Paciente</h2>
					<div class="field">
						<label class="label">Nome completo:</label>
						<div class="control has-icons-left">
							<input class="input" id="nome" type="text" name="nome" placeholder="Digite seu nome" value="${usuarioLogado.nomeUsuario}" disabled required>
							<span class="icon is-small is-left">
								<i class="fas fa-user"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Username:</label>
						<div class="control has-icons-left">
							<input class="input" type="text" name="username" value="${usuarioLogado.login}" placeholder="Digite seu username" required disabled>
							<span class="icon is-small is-left">
								<i class="fas fa-user-plus"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Email:</label>
						<div class="control has-icons-left">
							<input class="input" name="email" type="text" value="${usuarioLogado.email}" placeholder="Digite seu email" required disabled>
							<span class="icon is-small is-left">
								<i class="fas fa-envelope"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Senha:</label>
						<div class="control has-icons-left">
							<input class="input" type="password" name="senha" value="${usuarioLogado.senha}" placeholder="Digite sua senha" required disabled>
							<span class="icon is-small is-left">
								<i class="fas fa-key"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label class="label">G�nero:</label>
							<div class="control has-icons-left">
								<select class="select-input" name="genero" disabled>
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
								<input class="input" type="text" placeholder="Data de nascimento" name="dataNasc" id="dataNasc" value="${usuarioLogado.dataNascimento}" disabled>
								<span class="icon is-small is-left">
									<i class="far fa-calendar-alt"></i>
								</span>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label  class="label">CEP:</label>
							<div class="control has-icons-left">
								<input class="input" type="text" onkeyup="buscaCep()" placeholder="CEP" name="cep" id="cep" required>
								<span class="icon is-small is-left">
									<i class="far fa-calendar-alt"></i>
								</span>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label  class="label">CPF:</label>
							<div class="control has-icons-left">
								<input class="input" type="text" placeholder="CPF" name="cpf" id="cpf" required>
								<span class="icon is-small is-left">
									<i class="far fa-calendar-alt"></i>
								</span>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label  class="label">Hist�rico</label>
							<div class="control has-icons-left">
								<textarea name="historico" id="historico" placeholder="Historico"></textarea>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label  class="label">N�mero de consultas realizadas:</label>
							<div class="control has-icons-left">
								<input class="input" type="number" placeholder="N�mero de consultas realizadas" name="consultas" id="consultas" required>
								<span class="icon is-small is-left">
									<i class="far fa-calendar-alt"></i>
								</span>
							</div>
						</div>
					</div>
					<div class="field">
						<button class="button is-success is-fullwidth" type="submit">Upgrade <i class="far fa-arrow-alt-circle-up" style="margin-left: 15px;"></i></button>
					</div>
				</div>
			</form>
		</div>
	</main>
	<%@ include file="WEB-INF/footer.jsp"%>

	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.26.11/dist/sweetalert2.all.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/jquery.mask.js"></script>
	<script src="_js/validaForm.js"></script>
	<script src="_js/script_cadastro_usuario.js"></script>
	<script src="_js/validaCep.js"></script>
  </body>
</html>