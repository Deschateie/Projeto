function tabsFunction(){
	var buttons = document.querySelectorAll('.tabs-button');
	var elementos = document.querySelectorAll('.friends_tabs');

	buttons.forEach(function(btn, index) {
		btn.addEventListener('click', function(e){
			for(var i=0; i < elementos.length; i++){
				elementos[i].style.display = 'none';
				buttons[i].classList.remove('active');
			}

			elementos[index].style.display = 'block';
			btn.classList.add('active');
		});
	});
}

/*
var btnSave = document.querySelector('.btn-submit-anotacoes');

btnSave.addEventListener('click', function(e){
	e.preventDefault();
	var inputMsg = document.querySelector('.anotacoes').textContent;
	saveFileAnotation(inputMsg);
	alert('save');
}); 
*/

$('.btn-submit-anotacoes').click(function(e){
	e.preventDefault();
	var msg = document.querySelector('.anotacoes').value;
	console.log(msg);
	var blob = new Blob([msg], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "anotacoes.txt");
});

function saveFileAnotation(msg){
	var blob = new Blob([msg], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "anotacoes.txt");
}




setTimeout(function(){ tabsFunction(); }, 1000);

