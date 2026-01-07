function readText(){
 let text = document.body.innerText;
 let speech = new SpeechSynthesisUtterance(text);
 speech.lang = "en-IN";
 window.speechSynthesis.speak(speech);
}
