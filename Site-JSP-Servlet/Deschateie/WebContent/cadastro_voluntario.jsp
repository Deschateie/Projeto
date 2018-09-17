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
		<div class="container">
			<form action="#">
				<div>
					<h2 class="has-text-centered has-text-weight-bold">Cadastro de Voluntario</h2>
					<div class="field">
						<div class="group_input">
							<label class="label">RG:</label>
							<div class="control">
								<input class="input" placeholder="Registro Geral" onkeyup="validaInput(this)" type="text" id="rg" required>
							</div>
						</div>
						<div class="group_input">
							<label class="label">CPF:</label>
							<div class="control">
								<input class="input" type="text" id="cpf" onkeyup="validaInput(this)" placeholder="CPF" required>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label class="label">Curso:</label>
							<div class="control">
								<input class="input" type="text" name="curso" onkeyup="validaInput(this)" placeholder="Digite o curso atual que está cursando" required>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label class="label">Pérido do Curso</label>
							<div class="control">
								<select name="periodo_curso" id="periodo_curso" required>
									<option>Selecione</option>
									<option value="manha">Manhã</option>
									<option value="tarde">Tarde</option>
									<option value="noite">Noite</option>
								</select>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="group_input">
							<label class="label">Celular:</label>
							<div class="control">
								<input class="input" type="text" onkeyup="validaInput(this)" placeholder="Número do Celular" required>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<label class="label">Comentário:</label>
						  <textarea class="textarea" type="text" onkeyup="validaInput(this)" placeholder="Descreva por que você deseja ser vonluntário" required></textarea>
						</div>
					</div>
					<div class="field">
						<button class="button is-success is-fullwidth" type="submit">Salvar</button>
					</div>
				</div>
			</form>
		</div>
	</main>
	
	<%@ include file="WEB-INF/footer.jsp" %>


	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.26.11/dist/sweetalert2.all.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/cepCorreios.js"></script>
	<script src="_js/jquery.mask.js"></script>
	<script src="_js/validaForm.js"></script>
	<script src="_js/validaInput.js"></script>
  </body>
</html>