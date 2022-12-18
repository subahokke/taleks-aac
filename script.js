let msg = new SpeechSynthesisUtterance();
msg.lang = "en-US";
msg.voice = speechSynthesis.getVoices().filter(function (voice) {
  return voice.name == "Samantha";
})[0];

function speakMessage(clicked_id) {
  msg.text = clicked_id;
  if (clicked_id === "yaoi") {
    let yaoi = new SpeechSynthesisUtterance("やおい");
    yaoi.voice = speechSynthesis.getVoices().filter(function (voice) {
      return voice.name == "Kyoko";
    })[0];
    window.speechSynthesis.speak(yaoi);
  } else if (clicked_id === "yuri") {
    let yuri = new SpeechSynthesisUtterance("ゆり");
    yuri.voice = speechSynthesis.getVoices().filter(function (voice) {
      return voice.name == "Kyoko";
    })[0];
    window.speechSynthesis.speak(yuri);
  } else {
    window.speechSynthesis.speak(msg);
  }
}

function submit() {
  let inputText = document.getElementById("input").value;
  msg.text = inputText;
  window.speechSynthesis.speak(msg);
  document.getElementById("input").value = "";
}
