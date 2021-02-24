var ysc = 0, csc = 0;
var imag = document.getElementById("myImage").src="https://dx5683gi1tv0w.cloudfront.net/dtrjyhj9q/image/upload/w_1080,h_1080,c_pad,b_auto/s3/img0be16e8d8";
window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("scream");
};
function user(choice) {
	var user_choice = choice;
	var com_choice = Math.floor(Math.random()*3)
	var adit = user_choice + com_choice
	if (adit == 2 || adit == 3 || adit == 7) {
		ysc = ysc + 1;
		  ctx.drawImage(imag , 10, 10);
	}
	else if (adit == adit == 1 || adit == 5 || adit == 6) {
		csc = csc + 1;
		alert("You lose" + user_choice + com_choice + image);
	}
	document.getElementById('ys').innerHTML = 'your score : ' + ysc;
	document.getElementById('cs').innerHTML = 'com score : ' + csc;
}
