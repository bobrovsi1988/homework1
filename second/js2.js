function redirectPage() {
    return window.location.href="index.html";

}

var body = document.getElementById("body");
var link = document.querySelector('link[rel=import]');
var content = link.import.querySelector('#second');

function refactBody(patern) {
    body.innerHTML= "";
    document.body.appendChild(content.cloneNode(true));

}