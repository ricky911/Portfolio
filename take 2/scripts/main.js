var i = 0;
var words = "am a web developer";
var speed = 50;

function typeWriter(){
	if(i < words.length){
		document.getElementById("phrases").innerHTML += words.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}