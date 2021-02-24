var ysc = 0, csc = 0;
var chr = ["Rock", "Paper", "Scissor"]
function user(choice) {
	var user_choice = choice;
	var com_choice =Math.floor(Math.random() * Math.floor(3))
	var adit = user_choice + com_choice - 3
	if (adit == 2 || adit == 3 || adit == 7) {
		ysc = ysc + 1;
		alert("You lose\n" + chr[user_choice/3] + "  " +  chr[com_choice]);
	}
	else if (adit == adit == 1 || adit == 5 || adit == 6) {
		csc = csc + 1;
		alert("You lose\n" + chr[user_choice/3] + "  " + chr[com_choice] );
	}
	document.getElementById('ys').innerHTML = 'your score : ' + ysc;
	document.getElementById('cs').innerHTML = 'com score : ' + csc;
}
