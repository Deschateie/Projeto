<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%
	if(request.getSession().getAttribute("usuario") != null && request.getSession().getAttribute("usuario") != ""){
%>
	<script>alert("<%= request.getSession().getAttribute("usuario") %>");</script>
<% 
	}
 %>
<footer>
	<div class="container">
		<div class="footer">
			<div class="network">
				<a href="#"><i class="fab fa-instagram"></i></a> <a href="#"><i
					class="fab fa-facebook-messenger"></i></a> <a href="#"><i
					class="fab fa-youtube"></i></a>
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