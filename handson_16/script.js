function greet(name) {
    return "Hello " + name;
}

function showMessage() {
    document.getElementById("output").innerHTML =
        greet("Aravindh");
}