package br.com.deschateie.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/chatbot")
public class ChatbotWEB extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Cookie[] cookies = req.getCookies();
		PrintWriter writer = resp.getWriter();
		
		if (cookies != null) {
			String email = "";
			String nivelPermissao = "";
			for(Cookie cookie : cookies) {
				if(cookie.getName().equals("usuario.email")) {
					email = cookie.getValue();
				}
				if(cookie.getName().equals("usuario.nivelPermissao")) {
					nivelPermissao = cookie.getValue();
				}
			}
			
			resp.sendRedirect("chatbot.jsp");
			
		}else {
			resp.sendRedirect("login.jsp");
		}
		
	}
	
}
