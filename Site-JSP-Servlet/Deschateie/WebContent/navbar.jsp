<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<c:choose>
	<c:when test="${not empty request.getSession('usuarioLogado')}">
		<nav>
			<div class="menu_pattern" id="topo">
				<div class="container is-widescreen">
					<div class="tabs is-centered">
					  <ul>
					    <li><a href="index.html">Home</a></li>
					    <li><a href="index.html#quemSomos" class="scrollSuave">Quem Somos</a></li>
					    <li class="is-active"><a href="login.html">Fazer Login</a></li>
					    <li><a class="btn_cvs" href="chatbot.html">Conversar</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</nav>
	</c:when>
	<c:when test="${usuarioLogado.codigo < 2}">
		<nav>
			<div class="menu_pattern" id="topo">
				<div class="container is-widescreen">
					<div class="tabs is-centered">
					  <ul>
					    <li><a href="#">Perfil</a></li>
					    <li><a href="#">Agendamento</a></li>
					    <li>><a href="#">Catalogo</a></li>
					    <li><a class="btn_cvs" href="chatbot.html">Conversar</a></li>
					    <li><a class="btn_saior" href="#">Sair</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</nav>
	</c:when>
</c:choose>
