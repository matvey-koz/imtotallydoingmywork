function IWillFindYou() {
    // remove welcome text
    document.querySelector("body > div:nth-child(1)").style.display = "none";
    // add container div
    let container = document.createElement("div");
    container.classList.add("container");
    // add div with class "form"
    let form = document.createElement("div");
    form.classList.add("form");
    // add pasword label
    let label = document.createElement("label")
    label.innerText = "You really thought you could just see the answers huh? What's the password?";
    //add password input box
    let input = document.createElement("input");
    input.setAttribute("type", "password");
    // add submit button container
    let submitContainer = document.createElement("div");
    submitContainer.classList.add("submitButton");
    // add submit button
    let submit = document.createElement("button");
    submit.innerText = "Submit";
    submit.setAttribute("onclick", "doNothing()");
    // append elements
    submitContainer.append(submit);
    form.append(label);
    form.append(input);
    form.append(submitContainer);
    container.append(form);
    document.body.appendChild(container);

    // let text = document.createElement("p");
    // text.innerText = "Enter the password hehehe:";
    // let input = document.createElement("input");
    // input.setAttribute("type", "password");
    // let submit = document.createElement("button");
    // submit.innerText = "Click";
    // submit.setAttribute("id", "submitButton");
    // submit.setAttribute("onclick", "doNothing()");
    // submit.style.marginTop = "50px";
    // container.append(text);
    // container.append(input);
    // container.append(submit);
    // document.body.appendChild(container);
    // form.style.display = "none";
}

function doNothing() {
    window.open("mat.x10.mx");
}