package br.com.deschateie.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import br.com.deschateie.beans.Usuario;
import br.com.deschateie.conexao.Conexao;

public class UsuarioDAO {

	private Connection con;
	private PreparedStatement stmt;
	private ResultSet rs;
	
	public UsuarioDAO() throws Exception{
		con = new Conexao().conectar();
	}
	
	public String novoUsuario(Usuario usuario) throws Exception{
		stmt = con.prepareStatement("INSERT INTO T_DTE_USUARIO(CD_USUARIO, NM_LOGIN, DS_SENHA, DS_EMAIL, NR_NIVEL_PERMISSAO) VALUES (?,?,?,?,?)");
		
		stmt.setInt(1, usuario.getCodigo());
		stmt.setString(2, usuario.getUsername()); 
		stmt.setString(3, usuario.getSenha());
		stmt.setString(4, usuario.getEmail());
		stmt.setInt(5, usuario.getNivelPermissao());
		
		stmt.executeUpdate();
		
		con.close();
		
		return "Cadastrado com sucesso";
	
	}
	
	public Usuario autenticarUsuario(String username, String senha) throws Exception{
		stmt = con.prepareStatement("SELECT * FROM T_DTE_USUARIO WHERE NM_LOGIN = ? AND DS_SENHA = ?");
		
		stmt.setString(1, username);
		stmt.setString(2, senha);
		
		rs = stmt.executeQuery();
		
		
		
		if(rs.next()) {
			return new Usuario(rs.getInt("CD_USUARIO"), rs.getString("NM_LOGIN"), 
					rs.getString("DS_EMAIL"), rs.getString("DS_SENHA"), 
					rs.getInt("NR_NIVEL_PERMISSAO"));
		}else {
			return new Usuario();
		}
		
		//con.close();
		//return usuario;
	}
	
}
