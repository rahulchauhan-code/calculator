
function dzero() {
    document.getElementById("text").value += "00";
}
function zero(){
    document.getElementById("text").value += "0";
}
function one(){
    document.getElementById("text").value += "1";
}
function two() {
    document.getElementById("text").value += "2";
}
function three() {
    document.getElementById("text").value += "3";
}
function four() {
    document.getElementById("text").value += "4";
}
function five() {
    document.getElementById("text").value += "5";
}
function six() {
    document.getElementById("text").value += "6";
}
function seven() {
    document.getElementById("text").value += "7";
}
function eight() {
    document.getElementById("text").value += "8";
}
function nine() {
    document.getElementById("text").value += "9";
}
function point() {
    document.getElementById("text").value += ".";
}
function clearDisplay() {
    document.getElementById("text").value = "";
}

function clearone() {
    const display = document.getElementById("text");
    display.value = display.value.slice(0, -1);
}

function canAddOperator() {
    const display = document.getElementById("text");
    const value = display.value.trim();
    
    // Check if display is empty
    if (value === "") {
        return false;
    }
    
    // Check if last character is an operator
    const lastChar = value[value.length - 1];
    const operators = ["+", "-", "*", "/", "%"];
    
    if (operators.includes(lastChar)) {
        return false;
    }
    
    return true;
}

function add() {
    if (canAddOperator()) {
        document.getElementById("text").value += "+";
    }
}

function sub() {
    if (canAddOperator()) {
        document.getElementById("text").value += "-";
    }
}

function multi() {
    if (canAddOperator()) {
        document.getElementById("text").value += "*";
    }
}

function division() {
    if (canAddOperator()) {
        document.getElementById("text").value += "/";
    }
}

function persentage() {
    if (canAddOperator()) {
        document.getElementById("text").value += "%";
    }
}

function bkts() {
    if(document.getElementById("text").value.split("(").length > document.getElementById("text").value.split(")").length) {
        document.getElementById("text").value += ")";
    } else {
        document.getElementById("text").value += "(";
    }   
}

function equal() {
    try {
        const result = eval(document.getElementById("text").value);
        document.getElementById("text").value = result;
    } catch (e) {
        document.getElementById("text").value = "Error";
    }
}