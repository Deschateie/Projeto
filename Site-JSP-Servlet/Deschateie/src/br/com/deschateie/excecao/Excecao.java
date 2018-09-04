package br.com.deschateie.excecao;

public class Excecao extends Exception{
	public static String tratarExcecao(Exception e) {
		//classes sem atributos tem que ser estatico(static) - a unica excecao é quando se usa o final
		if(e.getClass().getName().equals("java.sql.SQLException")) {
			return "Ocorreu um erro ao conectar no banco!";
		}else if(e.getClass().getName().equals("java.lang.NunmberFormatException")) {
			return "Número inválido!";
		}else {
			return "Deu ruim!!!";
		}
		
		
	}
	

}
