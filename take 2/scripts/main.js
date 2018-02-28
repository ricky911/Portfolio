var words = ["am a web developer", "freelance", "love to code", "am probably hungry"];
var el = document.getElementById('phrases');
var word_counter = 0;
var char_counter = 0;

function typeWriter(){
	if(words[word_counter][char_counter] == ' '){
		el.innerHTML = el.innerHTML + '&nbsp;'
		character_counter++;
	} else {
		el.innerHTML = el.innerHTML + words[word_counter][char_counter++];
	}
	if(char_counter == words[word_counter].length + 1) {
		word_counter++; 	//choose a different word
		character_counter = 0;	//start over with the first character of the word
		el.innerHTML = '';  //set the html to be blank

	//if we're displaying the last word, go back to the first word
	if(word_counter == words.length) 
		word_counter = 0;
	}
}

setInterval(typeWriter, 200);