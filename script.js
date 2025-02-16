function appendToDisplay(value) {
    document.getElementById("display").value += value;
    
}

function clearDisplay() {
    document.getElementById("display").value = "";
    
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if (/[\d+\-*/().]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
