function showMood(){
	name = document.getElementById('name').value;
	mood = document.getElementById('mood').value;

	//validation
	if(!name || !mood){
		alert("Please fill in all fields.");
		return false;
	}

	moodString = name + " is " + mood + " today! ";
	
	//ifelse fun
	if(mood == "happy"){
		smiley = ":)";
	}else if(mood == "sad"){
		smiley = ":(";
	}else{
		smiley = ":|";
	}

	holder = document.getElementById('holder');
	holder.innerHTML = moodString+smiley;
}

function clearMood(){
	document.getElementById('moodForm').reset();
	holder = document.getElementById('holder');
	holder.innerHTML = "";
}