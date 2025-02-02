function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function validateInput() {
    let display = document.getElementById("display");
    display.value = display.value.replace(/[^0-9+\-*/.]/g, ''); 
    
}
