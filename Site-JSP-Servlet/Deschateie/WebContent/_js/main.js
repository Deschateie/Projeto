window.onload = function() {
	callBot("");
}

var btnSend = document.querySelector("#sendQuestion");
var question = document.querySelector("#question");
btnSend.addEventListener("click", function(event) {
	event.preventDefault();
	
	createMessage(question.value, "right");
	
	callBot(question.value); 
	
	question.value = "";
});

function createMessage(message, type, pulse = false) {
	var chat = document.querySelector(".chat_log");
	var div = createDiv(message, type);
	chat.appendChild(div);
	scrollDivDown(chat);
	if (pulse) makePulse(chat);
}

function makePulse(element) {
	//alert("bot falando");
}

function callBot(message) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "chat", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.addEventListener("load", function() {
		if (xhr.status == 200) {
			var resposta = JSON.parse(xhr.responseText);
			createMessage(resposta.bot[resposta.bot.length - 1], "left", true);
		} else {
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});

	data = "question=" + message;
	xhr.send(data);
}

function createDiv(text, type) {
	var div = document.createElement("div");
	//var img = createImage(type);
	var p = createText(text);
	div.classList.add("conteudo");
	div.classList.add(type);

	var time = createTime(new Date());
	time.classList.add('time_log');
	//div.appendChild(img);
	div.appendChild(p);
	div.appendChild(time);
	return div;
}

function createImage(type) {
	var img = document.createElement("img");
	img.setAttribute("src", "img/" + type + ".png");
	img.classList.add("icon" + type);
	return img;
}

function createTime(Date){
	var p = document.createElement("p");
	var hours = Date.getHours();
	var minutes = Date.getMinutes();
	p.textContent = hours + ":" + minutes;
	return p;
}

function createText(text) {
	var p = document.createElement("p");
	p.textContent = text;
	return p;
}

function scrollDivDown(div) {
	for (var i = 0; i < div.offsetHeight; i++) {
		div.scrollTop++;
	}
}



$(document).ready(function() {
	  $(window).keydown(function(event){
	    if(event.keyCode == 13) {
	    	event.preventDefault();
	    	
	    	if(question.value != ""){
	    	createMessage(question.value, "right");
	    	callBot(question.value); 
	    	question.value = "";
	    	}
	    }
	 });
});