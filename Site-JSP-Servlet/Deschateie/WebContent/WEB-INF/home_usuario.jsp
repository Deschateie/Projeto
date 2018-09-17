<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Deschateie</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
    <link rel="stylesheet" href="_css/bulma.css">
    <link rel="stylesheet" href="_css/estilo.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  </head>
  <body>
	<%@ include file="navbar.jsp" %>
	
	<main>
    <div class="container">
    <c:if test="${usuarioLogado.nivelPermissao == 0}">
      <div class="home-container">
        <div class="home-header">
          <div class="home-header-item">
          	<form action="redirecionamento" method="POST">
          	<input type="hidden" name="caminho" value="cadastroPaciente">
            <a><button class="botao">Termine seu cadastro para ter mais beneficios.</button></a>
          	</form>
          </div>
        </div>
        </c:if>
        <div class="home-container">
			<c:if test="${usuarioLogado.nivelPermissao > 0}">
				<div class="home-container-item">
            		<a href="#">
             			<i class="fas fa-comments icon-nav"></i>
            			<p class="item-link">[ Conversation Friends ]</p>
            		</a>
          		</div>
			</c:if>
			<c:if test="${usuarioLogado.nivelPermissao > 0}">
				<div class="home-container-item">
	          		<a href="#">
	              		<i class="fas fa-clipboard-list icon-nav"></i>
	              		<p class="item-link">[ Agendamento ]</p> 
	            	</a>
          		</div>
			</c:if>
          <div class="home-container-item">
			<form action="redirecionamento" method="POST">
			  <input type="hidden" name="caminho" value="cadastroPaciente">
			  <a>
               <i class="fas fa-user-edit icon-nav"></i>
               <p class="item-link">[ Editar Perfil ]</p> 
              </a>
			</form>
          </div>
          <div class="home-container-item">
          	<a href="#">
              <i class="fas fa-robot icon-nav"></i>
              <p class="item-link">[ Conversation Bot ]</p> 
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
	
  <%@ include file="footer.jsp" %>

	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  	<script src="_js/script.js"></script>
  
</body>
</html>