var ysc = 0, csc = 0;
function user(choice) {
	var user_choice = choice;
	var com_choice = Math.floor(Math.random()*3)
	var adit = user_choice + com_choice
	if (adit == 2 || adit == 3 || adit == 7) {
		ysc = ysc + 1;
		alert("You won" + user_choice + com_choice);
	}
	else if (adit == adit == 1 || adit == 5 || adit == 6) {
		csc = csc + 1;
		alert("You lose" + user_choice + com_choice);
	}
	document.getElementById('ys').innerHTML = 'your score : ' + ysc;
	document.getElementById('cs').innerHTML = 'com score : ' + csc;
}