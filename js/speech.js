let synth = window.speechSynthesis;
let utterance;
let currentLang = "en-IN";

function setLanguage(lang) {
  if (lang === "en") currentLang = "en-IN";
  if (lang === "ta") currentLang = "ta-IN";
  if (lang === "hi") currentLang = "hi-IN";
}

function startReading() {
  stopReading();
  const text = document.getElementById("lawsContent").innerText;
  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLang;
  synth.speak(utterance);
}

function stopReading() {
  if (synth.speaking) synth.cancel();
}
