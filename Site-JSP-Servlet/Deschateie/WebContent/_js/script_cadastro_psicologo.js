var input = document.getElementById("file-input");
var fileName = document.getElementById("file_name_here");

var nome = "Aquivo não suportado.";

input.addEventListener("change", function(evt){
	var valida = input.files[0].name.substring(input.files[0].name.lastIndexOf("."));

    console.log(input.value);

	console.log(event.target.files);

    if(input.files.length > 0 ) {
    	if(valida == ".jpg" || valida == ".png")
    		nome = input.files[0].name;
    }else{
    	input.style.backgroundColor = 'red';
    	input.value = "";
    }
    fileName.textContent = nome;
    alert(input.value);
    console.log(input.value);
    appendTheFile(event.target.files);
});

function appendTheFile (url) {
	url = new URL(url);
	// se for uma imagem, adicionamos uma imagem
	let img = document.createElement('img');
	img.src = url.toString();
	document.getElementsByTagName("body").appendChild(img);
}