function validaInput(input){
	input.addEventListener('keyup', function(evt){
		var value = input.value;

		if(value.length > 0){
			input.classList.add('is-primary');
		}
		if(value.length <= 0){
				input.classList.remove('is-primary');
		}

	});
}