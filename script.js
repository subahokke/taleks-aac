let msg = new SpeechSynthesisUtterance();
msg.lang = "en-US";
msg.voice = speechSynthesis.getVoices().filter(function (voice) {
  return voice.name == "Samantha";
})[0];

function speakMessage(clicked_id) {
  msg.text = clicked_id;
  window.speechSynthesis.speak(msg);
}

function submit() {
  let inputText = document.getElementById("input").value;
  msg.text = inputText;
  window.speechSynthesis.speak(msg);
  document.getElementById("input").value = "";
}
