document.querySelector("body > div:nth-child(2)").style.display = "none";

function IWillFindYou() {
    // remove welcome text
    document.querySelector("body > div:nth-child(1)").style.display = "none";
    document.querySelector("body > div:nth-child(2)").style.display = "flex";
}
function doNothing() {
    let bruh = document.getElementById("password").value;
    if (bruh === "ilovecheating") {
        window.open("https://mat.x10.mx");
    } else {
        alert("Haha you entered the wrong password");
    }
}

function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}