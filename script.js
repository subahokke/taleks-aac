var msg = new SpeechSynthesisUtterance();


function speakMessage(clicked_id){
    let messageText = clicked_id;
    msg.text = messageText;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
    }

function submit(){
    let inputText = document.getElementById("input").value;
    msg.text = inputText;
    window.speechSynthesis.speak(msg);
    document.getElementById("input").value = '';
}
