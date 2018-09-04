package br.com.deschateie.conexao;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {
	public Connection conectar() throws Exception{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		return DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "SYSTEM", "@Mapabo10");
	}

}
