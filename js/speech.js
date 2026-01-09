let utterance;

function readLaws() {
  const text = document.getElementById("lawsContent").innerText;
  const lang = document.getElementById("languageSelect").value;

  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;

  window.speechSynthesis.cancel(); // stop previous
  window.speechSynthesis.speak(utterance);
}

function stopReading() {
  window.speechSynthesis.cancel();
}
