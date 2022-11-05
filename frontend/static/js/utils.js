function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(text, elementId, speed) {
    let i = 0;
    while (i < text.length) {
        document.getElementById(elementId).innerHTML = document.getElementById(elementId).innerHTML.slice(0, -1);
        document.getElementById(elementId).innerHTML += text.charAt(i) + '|';
        i++;
        await sleep(speed);
    }
    document.getElementById(elementId).innerHTML = document.getElementById(elementId).innerHTML.slice(0, -1);
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
