
const roomName = JSON.parse(document.getElementById('room-name').textContent);
const chatContainer = document.getElementById('chat_messages_container');


// Connetct to a Socket
const chatSocket = new WebSocket(
    'ws://' +
    window.location.host +
    '/ws/chat/' +
    roomName +
    '/'
);

// Send message to Socket
document.querySelector('#submit').onclick = function (e) {
    const messageInputDom = document.querySelector('#input');
    const message = messageInputDom.value;
    const username = getCookie('username');
    chatSocket.send(JSON.stringify({
        'message': message,
        'username': username,
    }));
    messageInputDom.value = '';
};


// Recieve a message from Socket
chatSocket.onmessage = function (e) {
    const username = getCookie('username');
    const data = JSON.parse(e.data);
    let message_class;
    if (data.username == username) {
    message_class = 'client';
    } else {
    message_class = 'roommate';
    }
    data.message = data.message.split(/\r?\n/).filter(element => element).join('</br>');
    console.log(data.message)
    document.querySelector('#chat_messages_container').innerHTML += 
    '<div class="message ' + message_class + '">\
        <span class="username">' + data.username + ':</span>\
        <span class="message_text">' + data.message + '</span>\
    </div>';
    chatContainer.scrollTo(0, 9999); // TODO: if client/if roommate
}

// Make a click on enter in message input
document.querySelector('#input').focus();
document.querySelector('#input').onkeyup = function(e) {
    if (e.keyCode === 13 && !e.shiftKey) {  // enter, return
        document.querySelector('#submit').click();
    }
};

document.querySelector('#input').onkeydown = function(e) {
    if (e.keyCode == 9) {
        e.preventDefault(); 
        var start = this.selectionStart;
        var end = this.selectionEnd;
    
        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
          "    " + this.value.substring(end);
    
        // put caret at right position again
        this.selectionStart =
          this.selectionEnd = start + 4;
    } // make TAB
};
