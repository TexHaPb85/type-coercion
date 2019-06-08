
var TestBtn = document.getElementById('testBtn');

var badModal = document.getElementById('badModal');
var excellentModal =document.getElementById('excellentModal');
var notBadModal =document.getElementById('notBadModal');


var arrayOfTask = [];
arrayOfTask[0] = document.getElementById("t1");
arrayOfTask[1] = document.getElementById("t2");
arrayOfTask[2] = document.getElementById("t3");
arrayOfTask[3] = document.getElementById("t4");
arrayOfTask[4] = document.getElementById("t5");
arrayOfTask[5] = document.getElementById("t6");
arrayOfTask[6] = document.getElementById("t7");
arrayOfTask[6].value="?";


for (var i = 0; i < arrayOfTask.length; i++) {
	arrayOfTask[i].onkeyup = function (text) {
	    text = text || window.event;
        if (text.keyCode === 13) {
             checkAnswers ();
	    }
        // Отменяем действие браузера
        return false;
	}
}

TestBtn.onclick=function () {
	checkAnswers ();
}

function checkAnswers () {
 	var rightAns =0;

	if(arrayOfTask[0].value==true + false){
		rightAns++;
	}
	if(arrayOfTask[1].value==12 / '6'){
		rightAns++;
	}
	if(arrayOfTask[2].value=='number' + 15 + 3){
		rightAns++;
	}
	if(arrayOfTask[3].value==15 + 3 + 'number'){
		rightAns++;
	}
	if(arrayOfTask[4].value==([ 1 ] > null)){
		rightAns++;
	}
	if(arrayOfTask[5].value=='foo'+'bar'){
		rightAns++;
	}
	if(arrayOfTask[6].value==('true' == true)){
		rightAns++;
	}

	if(rightAns<4){
		badModal.style.display = "block";
	}else if(rightAns>6){
		excellentModal.style.display = "block";
	}else{
		notBadModal.style.display = "block";
	}
	//alert("Right answers:"+rightAns+"/7");
	document.getElementById("rightAnsw1").innerHTML="Right answers:"+rightAns+"/7";
	document.getElementById("rightAnsw2").innerHTML="Right answers:"+rightAns+"/7";
	document.getElementById("rightAnsw3").innerHTML="Right answers:"+rightAns+"/7";
	for (var i = 0; i < arrayOfTask.length; i++) {
		if(arrayOfTask[i].value=="" && i!=6){
			arrayOfTask[i].value="Provide your answer here!";
			arrayOfTask[i].style="border: 4px solid red";
		}else if(arrayOfTask[i].value!="Provide your answer here!"){
			arrayOfTask[i].style="border: 0px solid red";
		}
	}
 } 

function closeModalWindow () {
	badModal.style.display = "none";
	excellentModal.style.display = "none";
	notBadModal.style.display = "none";
}


window.onclick = function (event) {
	if(event.target==badModal){
		badModal.style.display = "none";		
	}
	if(event.target==excellentModal){
		excellentModal.style.display = "none";
	}
	if(event.target==notBadModal){
		notBadModal.style.display = "none";
	}
}