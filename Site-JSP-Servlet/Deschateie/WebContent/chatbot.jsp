<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Deschateie</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="_css/bulma.css">
    <script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    <link rel="stylesheet" href="_css/estilo.css">
  </head>
  <body>
	<nav>
		<div class="back"><a href="index.jsp"><i class="fas fa-angle-left"></i></a></div>
	</nav>
	<main>
		<div class="main">
			<div class="content_chat">
				<div class="header_chat"></div>
				<div class="body_chat">
					<div class="plus_control">
						<div class="plus_messages_friends">
							<div class="card_friends">
								<div class="card_friends_header">
									<img src="https://assets.wired.com/photos/w_1720/wp-content/uploads/2016/04/chat_bot-01.jpg" alt="#" >
								</div>
								<div class="card_friends_body">
									<div class="card_friends_name">
										<b>Chatbot</b>
									</div>
									<div class="card_friends_message">
										<div class="friends_message_text">
											<div class="tabs-actions">
											  <button class="tabs-button active">Descricao</button>
											  <button class="tabs-button">@Anota��es</button>
											</div>
											<div class="friends_tabs" id="desc">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore exercitationem, pariatur a nesciunt aliquid numquam laboriosam sint, atque, ut eaque nihil, cupiditate aut ratione quo ad doloremque reprehenderit sapiente odio?</p>
											</div>
											<div class="friends_tabs" id="contato" style="display: none;">
												<form action="#" class="formulario-anotacoes">
													<textarea name="anotacoes" class="anotacoes" placeholder="Anotações, as notações não ficam salvas, terá que realizar o download do mesmo, basta clicar no botão salvar."></textarea>
													<button type="submit" class="btn-submit-anotacoes">Salvar</button>
												</form>
											</div>
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
					<div class="chat_log"></div>
				</div>
				<div class="control_chat">
					<div class="input_message">
						<input type="text" placeholder="Escreva..." id="question">
					</div>
					<div class="btn_submit">
						<button type="submit" id="sendQuestion">Enviar</button>
					</div>
				</div>
			</div>
		</div>
	</main>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="_js/main.js"></script>
	<script src="_js/fileSaver.js"></script>	
	<script src="_js/script_chatbot.js"></script>
  </body>
</html>