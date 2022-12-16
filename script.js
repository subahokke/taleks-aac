var msg = new SpeechSynthesisUtterance();
msg.lang = 'en-US';

function speakMessage(clicked_id){
    let messageText = clicked_id;
    msg.text = messageText;
    window.speechSynthesis.speak(msg);
    }

function submit(){
    let inputText = document.getElementById("input").value;
    msg.text = inputText;
    window.speechSynthesis.speak(msg);
    document.getElementById("input").value = '';
}