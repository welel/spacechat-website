function isPassValidatoin() {
    return document.getElementById("validation_message_input_text").innerText == '';
}

function validateUsername() {
    const usernameValidator = document.getElementById("validation_message_input_text");
    if (document.getElementById("username-input").value.length > 20) {
        usernameValidator.innerText = "Username should be less than 20 symbols.\n"
    } else {
        usernameValidator.innerText = "";
    }
}