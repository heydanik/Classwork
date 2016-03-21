function randomPassword(length) {
    var keyword = document.getElementById("keyword").value;
    var username = document.getElementById("username").value;
    var chars = keyword + username;
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
    myform.password.value = randomPassword(myform.length.value);
}