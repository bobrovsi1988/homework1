var name = prompt("enter your name",null);
var body = document.getElementById("body");
function camelWord(str) {
    var newStr ="";
    for ( var i = 1; i<=str.length; i++){
        var symbol = str.charAt(i-1);
        if(i%2){
            newStr +=symbol.toUpperCase();
        }else {
            newStr +=symbol.toLowerCase();
        }

    }
    return newStr;
}
function reverseString(str) {
    var newStr ="";
    for (var i =str.length-1; i>=0; i--){
        newStr +=str.charAt(i);

    }
    return newStr;
    
}

if( /\d/.test(name)){
    body.innerHTML =camelWord(name);

}else {
    body.innerHTML =reverseString(name);

}