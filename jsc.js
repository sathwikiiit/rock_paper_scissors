var ysc = 0, csc = 0;
var chr = ["Rock", "Paper", "Scissor"]
function user(choice) {
	var user_choice = choice;
	var com_choice =Math.floor(Math.random() * 3)
	var adit = user_choice + com_choice - 3
	if (adit == 2 || adit == 3 || adit == 7) {
		ysc = ysc + 1;
		alert("You Won \n" + chr[user_choice/3 - 1] + "  " +  chr[com_choice]);
	}
	else if (adit == 1 || adit == 5 || adit == 6) {
		csc = csc + 1;
		alert("You lose\n" + chr[user_choice/3 - 1] + "  " + chr[com_choice] );
	}
	else if (adit == 4|| adit == 0 || adit == 8){alert("Balanced\n" + chr[user_choice/3 - 1] + "  " + chr[com_choice] );}
	document.getElementById('ys').innerHTML = 'your score : ' + ysc;
	document.getElementById('cs').innerHTML = 'com score : ' + csc;
}
