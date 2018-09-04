package br.com.deschateie.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import br.com.deschateie.beans.Usuario;
import br.com.deschateie.dao.UsuarioDAO;

@WebServlet(urlPatterns = "/realizarLogin")
public class UsuarioWEB extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
		try {
			String email = req.getParameter("email").toUpperCase();
			String senha = req.getParameter("senha").toUpperCase();
			
			PrintWriter writer = resp.getWriter(); 
			
			UsuarioDAO dao = new UsuarioDAO();
			Usuario usuario = dao.autenticarUsuario(email, senha);
			
			
			
			writer.println("<html><body>");
			
			//Dispatcher dispatacher = req.getRequestDispatcher();
			
			if(usuario.getCodigo() > 0) {
				HttpSession sessao = req.getSession();
				sessao.setAttribute("usuarioLogado", usuario);
				
				if(usuario.getNivelPermissao() == 1){
					writer.println("Página de chatbot direto");
				}else if(usuario.getNivelPermissao() == 2) {
					writer.println("Controle das conversas");
				}else if(usuario.getNivelPermissao() == 3) {
					req.getRequestDispatcher("monitoramento.jsp").forward(req, resp);
				}
			}else {
				req.setAttribute("erro", "Usuario não encontrado :(");
				req.getRequestDispatcher("login.jsp").forward(req, resp);
				writer.println("Falha no login");
			}
			
			writer.println("</body></html>");
		
		
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
}
