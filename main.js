function IWillFindYou() {
    // add container div
    let container = document.createElement("div");
    container.classList.add("container");
    // add div with class "form"
    let form = document.createElement("div");
    form.classList.add("form");


    let text = document.createElement("p");
    text.innerText = "Enter the password hehehe:";
    let input = document.createElement("input");
    input.setAttribute("type", "password");
    let submit = document.createElement("button");
    submit.innerText = "Click";
    submit.setAttribute("id", "submitButton");
    submit.setAttribute("onclick", "doNothing()");
    submit.style.marginTop = "50px";
    container.append(text);
    container.append(input);
    container.append(submit);
    document.body.appendChild(container);
    form.style.display = "none";
}

document.querySelector("#submitButton").addEventListener("click", doNothing());

function doNothing() {
    window.open("mat.x10.mx");
}