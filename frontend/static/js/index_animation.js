const greetingText = 'Welcome to SpaceChat!';
const greetingText2 = 'Let\'s connect to a room';

// Main
window.onload = (event) => {
    async function connectionFormAnimation(){

        // Greet a client
        await typeWriter(greetingText, 'greeting', 50);
        document.getElementById('greeting2').innerHTML += '|'
        await typeWriter(greetingText2, 'greeting2', 50);
        
        // Show username form
        document.getElementById('username_form').hidden = false;
        document.getElementById('username-input').focus();
    };
    connectionFormAnimation();
};


// Handle username input and show room input
document.getElementById("username-input").onkeyup = function (e) {
    validateUsername();
    if (e.key == 'Enter') {// enter pressed
        // Show room input field
        document.getElementById("room_form").hidden = false;
        document.getElementById('enter-room').focus();
    }
};
