package br.com.deschateie.beans;

public class Usuario {
	private int codigo;
	private String username;
	private String email;
	private String senha;
	private int nivelPermissao;
	
	
	
	
	public Usuario() {
		super();
	}



	public Usuario(int codigo, String username, String email, String senha, 
			int nivelPermissao) {
		super();
		setCodigo(codigo);
		setUsername(username);
		setEmail(email);
		setSenha(senha);
		setNivelPermissao(nivelPermissao);
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email.toUpperCase();
	}



	public String getSenha() {
		return senha;
	}



	public void setSenha(String senha) {
		this.senha = senha.toUpperCase();
	}



	public int getNivelPermissao() {
		return nivelPermissao;
	}



	public void setNivelPermissao(int nivelPermissao) {
		this.nivelPermissao = nivelPermissao;
	}
	
	
	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}	
	
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}



	public int getCodigo() {
		return codigo;
	}
	
}
