


function speakMessage(clicked_id){
    let msg = new SpeechSynthesisUtterance(clicked_id);
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
    }

function submit(){
    let inputText = document.getElementById("input").value;
    msg.text = inputText;
    window.speechSynthesis.speak(msg);
    document.getElementById("input").value = '';
}
