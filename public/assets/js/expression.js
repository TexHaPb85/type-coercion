var inputF = document.getElementById('inp');

function validate() {
	var inputString = inputF.value;
	var possibleValues = "+-/*=!',qwertyuiopasdfghjklzxcvbnm1234567890 ";
	//alert(inputString);
	if(inputString==""){
		inputF.value="empty expression";
		return false;
	}
	for (var i = 0; i < inputString.length; i++) {
		if(possibleValues.search(inputString[i])==-1){
			inputF.value="wrong expression";
			return false;
		}
	}
	inputF.value="all right";
	//alert("all right");
}