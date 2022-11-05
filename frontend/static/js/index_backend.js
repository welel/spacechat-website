
// Redirect to a room
document.querySelector('#enter-room').onkeyup = function (e) {
    if (e.keyCode === 13 && isPassValidatoin()) { // enter pressed
        // Put username in Cookie
        const username = document.getElementById('username-input').value;
        document.cookie = 'username=' + encodeURIComponent(username);
        // Redirect by room URL
        const roomName = document.getElementById('enter-room').value;
        const url = 'http://' + window.location.host + '/' + roomName + '/'
        window.location.href = url;
    }
};
