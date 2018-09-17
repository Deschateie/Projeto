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
		<div class="filter">
			<div class="search">
				<label for="search">Pesquise pelo nome:</label>
				<input type="text" class="input_search" id="search">
				<button class="btn_search" type="submit"><i class="fas fa-search"></i></button>
			</div>

			<div class="rangeslider">
				<p class="text_range">Filtro:</p>
				<input class="min" id="origin_min" name="range_1" type="range" min="1" max="100" value="10" />
				<input class="max" id="origin_max" name="range_1" type="range" min="1" max="100" value="50" />
				<span class="range_min light left">R$ 500</span>
				<span class="range_max light right">R$ 1.500</span>
			</div>
		</div>
		<div class="main-search-map">
			<div class="level filter-search">
				<div class="list_itens">	
				<div class="catalogo_query">
						<div class="content_catalogo">
							<div class="image">
								<img id="fotoPerfil-info" src="https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg" alt="#">
							</div>
							<div class="desc-content">
								<div class="content_bio">
									<h2 id="nomePsicologo-info">Doutor Felipe Masckarena</h2>
									<p id="shortDesc-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, deleniti corporis...</p>
									<div class="cash" id="valorConsulta-info">
										<div class="minValueCard">
											<p class="rs">R$ </p>
											<b class="min-value">150</b> 
										</div>
										<p class="separator">-</p> 
										<div class="maxValueCard">
											<p class="rs">R$</p> 
											<b class="max-value">5000</b> 
										</div>
									</div>
								</div>
								<div class="rank">
									<p class="rank_star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
								</div>
							</div>
							<div class="action_content">
								<a href="agendamento.jsp"><button class="btn_submit">Mais detalhes <i class="fas fa-plus"></i></button></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="level-item level-right google-map">
				<div id="map"></div>
			</div>
		</div>
	</main>
	<footer>
		<div class="container">
			<div class="footer">
				<div class="network">
					<a href="#"><i class="fab fa-instagram"></i></a>
					<a href="#"><i class="fab fa-facebook-messenger"></i></a>
					<a href="#"><i class="fab fa-youtube"></i></a>
				</div>
				<div class="footer-menu">
					<a href="catalogo.jsp">Catalogo</a>
					<a href="page_especial_menor_idade.jsp">Pagina menor idade</a>
					<a href="cadastro_usuario.jsp">Cadastre-se</a>
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

	<script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="_js/script_catalogo.js"></script>
	<script src="_js/script.js"></script>
	<script src="_js/slider-search.js"></script>
	<script src="_js/map.js"></script>
	<!-- Gmaps JavaScript -->
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPExf4MLiTEWc2MMdDuM_o1dKaPUiqJQA&callback=initMap"></script>


  </body>
</html>