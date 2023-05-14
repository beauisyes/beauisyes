function contentCleared() {
    document.getElementById("input").value = '';
    document.getElementById("output").value = '';
}

function buttonClicked(value) {
    document.getElementById("input").value += value; 
}

function equal() {
    const operation = document.getElementById("input").value;
    const rounded = eval(operation).toFixed(2);
    document.getElementById("output").value = rounded;
}
