<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<c:choose>
	<c:when test="${usuarioLogado.nivelPermissao == 3}">
		<nav>
			<div class="menu_pattern" id="topo">
				<div class="container is-widescreen">
					<div class="tabs is-centered">
					  <ul>
					    <li><a href="#">Perfil</a></li>
					    <li><a href="#">Monitoramento</a></li>
					    <li><a href="#">Agendados</a></li>
					    <li><a class="btn_sair" href="logout">Sair</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</nav>
	</c:when>
	<c:when test="${usuarioLogado.nivelPermissao == 2}">
		<nav>
			<div class="menu_pattern" id="topo">
				<div class="container is-widescreen">
					<div class="tabs is-centered">
					  <ul>
					    <li><a href="#">Perfil</a></li>
					    <li><a href="#">Monitoramento</a></li>
					    <li><a class="btn_cvs" href="chatbot.jsp">Conversar</a></li>
					    <li><a class="btn_sair" href="logout">Sair</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</nav>
	</c:when>
	<c:when test="${usuarioLogado.nivelPermissao == 1}">
		<nav>
			<div class="menu_pattern" id="topo">
				<div class="container is-widescreen">
					<div class="tabs is-centered">
					  <ul>
					    <li><a href="perfil_paciente.jsp">Perfil</a></li>
					    <li><a href="catalogo.jsp">Catalogo</a></li>
					    <li><a class="btn_cvs" href="chatbot.jsp">Conversar</a></li>
					    <li><a class="btn_sair" href="logout">Sair</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</nav>
	</c:when>
	<c:when test="${usuarioLogado.nivelPermissao == 0}">
		<nav>
			<div class="menu_pattern" id="topo">
				<div class="container is-widescreen">
					<div class="tabs is-centered">
					  <ul>
					  	<li class="is-active"><a href="home_usuario.jsp" style="font-size: 20px;"><i class="fas fa-home"></i></a></li>
					    <li><a href="cadastro_psicologo.jsp">Torna-se Parceiro</a></li>
					    <li><a href="cadastro_psicologo.jsp">Seja Psicologo Online</a></li>
					    <li><a href="#">Voluntarie</a></li>
					    <li><a class="btn_cvs" href="chatbot.jsp">Conversar</a></li>
					    <li><a class="btn_sair" href="logout">Sair</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</nav>
	</c:when>
	<c:otherwise>
		<nav>
			<div class="menu_pattern" id="topo">
				<div class="container is-widescreen">
					<div class="tabs is-centered">
					  <ul>
					    <li><a href="index.jsp">Home</a></li>
					    <li><a href="index.jsp#quemSomos" class="scrollSuave">Quem Somos</a></li>
					    <li class="is-active"><a href="login.jsp">Fazer Login</a></li>
					    <li><a class="btn_cvs" href="chatbot.jsp">Conversar</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</nav>
	</c:otherwise>
</c:choose>
