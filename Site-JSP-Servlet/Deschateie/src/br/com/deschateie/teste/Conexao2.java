package br.com.deschateie.teste;

import br.com.deschateie.beans.Usuario;
import br.com.deschateie.dao.UsuarioDAO;
import br.com.deschateie.excecao.Excecao;

public class Conexao2 {

	public static void main(String[] args) {
		try {
			
			UsuarioDAO dao = new UsuarioDAO();
			Usuario usuario = dao.autenticarUsuario("JUNINHO", "456");
			
			System.out.println(usuario.getCodigo());
			System.out.println(usuario.getEmail());
			System.out.println(usuario.getSenha());
			System.out.println(usuario.getUsername());
			System.out.println(usuario.getNivelPermissao());
		
		}catch(Exception e) {
			e.printStackTrace();
			System.out.println(Excecao.tratarExcecao(e));
		}
	}
}
