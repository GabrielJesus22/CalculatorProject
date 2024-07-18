//Variables
var var1 = 0

//Functions

//Events
window.addEventListener("load", function()  {
    var formPage = document.querySelector('.box-form')
    formPage.style.opacity = 1
    formPage.classList.add('mover')
});

document.addEventListener("click", (e) => {
    const targetButton = e.target
    const auxVisor = document.getElementById('txtVisor1') 
    const resultVisor = document.getElementById('txtVisor') 

    let valueSpan = auxVisor.textContent
    let valueVisor = resultVisor.value

    if(targetButton.classList.contains('all-clear') || targetButton.classList.contains('txt-all-clear')) {
        auxVisor.textContent = ""
        resultVisor.value = "0"
        var1 = 0
    } else if (targetButton.classList.contains('backspace') || targetButton.classList.contains('txt-backspace')) {
        
        if (valueVisor.length !== 1) {
            resultVisor.value = valueVisor.substring(0, valueVisor.length - 1);
        } else {
            resultVisor.value = "0"
        }
        
    } else if (targetButton.classList.contains('division') || targetButton.classList.contains('txt-division')) {
        
        var1 = Number(resultVisor.value)
        
        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " / "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (targetButton.classList.contains('multip') || targetButton.classList.contains('txt-multip')) {
        
        var1 = Number(resultVisor.value)
        
        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " * "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (targetButton.classList.contains('minus') || targetButton.classList.contains('txt-minus')) {
        
        var1 = Number(resultVisor.value)

        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " - "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (targetButton.classList.contains('plus') || targetButton.classList.contains('txt-plus')) {
        
        var1 = Number(resultVisor.value)

        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " + "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (targetButton.classList.contains('equal') || targetButton.classList.contains('txt-equal')) {
        
        if (valueSpan.includes("+")) {

            var1 = Number(var1) + Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        } else if (valueSpan.includes("-")) {
            
            var1 = Number(var1) - Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        } else if (valueSpan.includes("*")) {
            
            var1 = Number(var1) * Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        } else if (valueSpan.includes("/")) {
            
            var1 = Number(var1) / Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        }

    } else if (targetButton.classList.contains('nine') || targetButton.classList.contains('txt-nine')) {
        
        if (resultVisor.value == "0") {
            resultVisor.value = "9"

        } else {
            resultVisor.value = resultVisor.value + "9"
        }

    } else if (targetButton.classList.contains('eight') || targetButton.classList.contains('txt-eight')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "8"
        } else {
            resultVisor.value = resultVisor.value + "8"
        }

    } else if (targetButton.classList.contains('seven') || targetButton.classList.contains('txt-seven')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "7"
        } else {
            resultVisor.value = resultVisor.value + "7"
        }
    } else if (targetButton.classList.contains('six') || targetButton.classList.contains('txt-six')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "6"
        } else {
            resultVisor.value = resultVisor.value + "6"
        }
    } else if (targetButton.classList.contains('five') || targetButton.classList.contains('txt-five')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "5"
        } else {
            resultVisor.value = resultVisor.value + "5"
        }
    } else if (targetButton.classList.contains('four') || targetButton.classList.contains('txt-four')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "4"
        } else {
            resultVisor.value = resultVisor.value + "4"
        }
    } else if (targetButton.classList.contains('three') || targetButton.classList.contains('txt-three')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "3"
        } else {
            resultVisor.value = resultVisor.value + "3"
        }
    } else if (targetButton.classList.contains('two') || targetButton.classList.contains('txt-two')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "2"
        } else {
            resultVisor.value = resultVisor.value + "2"
        }
    } else if (targetButton.classList.contains('one') || targetButton.classList.contains('txt-one')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "1"
        } else {
            resultVisor.value = resultVisor.value + "1"
        }
    } else if (targetButton.classList.contains('zero') || targetButton.classList.contains('txt-zero')) {
        if (resultVisor.value == "0") {
            resultVisor.value = "0"
        } else {
            resultVisor.value = resultVisor.value + "0"
        }

    } else if (targetButton.classList.contains('dot') || targetButton.classList.contains('txt-dot')) {
        let dotExists = String(resultVisor.value)

        if (dotExists.includes(".") == false) {
            resultVisor.value = resultVisor.value + "."
        } 
    } 
});

document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é a tecla 'Ctrl' e 'S' ao mesmo tempo
    // event.ctrlKey && event.key === '.'

    const auxVisor = document.getElementById('txtVisor1') 
    const resultVisor = document.getElementById('txtVisor') 

    let valueSpan = auxVisor.textContent
    let valueVisor = resultVisor.value

    if (event.key === '.') {
        
        let dotExists = String(resultVisor.value)

        if (dotExists.includes(".") == false) {
            resultVisor.value = resultVisor.value + "."
        } 
    } else if (event.key === "0") {

        if (resultVisor.value == "0") {
            resultVisor.value = "0"
        } else {
            resultVisor.value = resultVisor.value + "0"
        }

    } else if (event.key === "1") {
        if (resultVisor.value == "0") {
            resultVisor.value = "1"
        } else {
            resultVisor.value = resultVisor.value + "1"
        }
    }  else if (event.key ===  "2") {
        if (resultVisor.value == "0") {
            resultVisor.value = "2"
        } else {
            resultVisor.value = resultVisor.value + "2"
        }

    }  else if (event.key === "3") {
        if (resultVisor.value == "0") {
            resultVisor.value = "3"
        } else {
            resultVisor.value = resultVisor.value + "3"
        }

    }  else if (event.key === "4") {
        if (resultVisor.value == "0") {
            resultVisor.value = "4"
        } else {
            resultVisor.value = resultVisor.value + "4"
        }
    } else if (event.key === "5") {
        if (resultVisor.value == "0") {
            resultVisor.value = "5"
        } else {
            resultVisor.value = resultVisor.value + "5"
        }
    } else if (event.key === "6") {
        if (resultVisor.value == "0") {
            resultVisor.value = "6"
        } else {
            resultVisor.value = resultVisor.value + "6"
        }
    } else if (event.key === "7") {
        if (resultVisor.value == "0") {
            resultVisor.value = "7"
        } else {
            resultVisor.value = resultVisor.value + "7"
        }
    } else if (event.key === "8") {
        if (resultVisor.value == "0") {
            resultVisor.value = "8"
        } else {
            resultVisor.value = resultVisor.value + "8"
        }
    } else if (event.key === "9") {
        if (resultVisor.value == "0") {
            resultVisor.value = "9"
        } else {
            resultVisor.value = resultVisor.value + "9"
        }
    } else if (event.key === "/") {

        var1 = Number(resultVisor.value)

        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " / "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (event.key === "-") {
        var1 = Number(resultVisor.value)

        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " - "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (event.shiftKey && event.key === "+") {

        var1 = Number(resultVisor.value)

        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " + "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (event.shiftKey && event.key === "*") {

        var1 = Number(resultVisor.value)

        const span = document.createElement('span');
        span.classList.add('operator')
        span.textContent = " * "
        auxVisor.textContent = resultVisor.value 
        auxVisor.appendChild(span)
        resultVisor.value = "0"

    } else if (event.key === "Enter") {
        if (valueSpan.includes("+")) {

            var1 = Number(var1) + Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        } else if (valueSpan.includes("-")) {
            
            var1 = Number(var1) - Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        } else if (valueSpan.includes("*")) {
            
            var1 = Number(var1) * Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        } else if (valueSpan.includes("/")) {
            
            var1 = Number(var1) / Number(resultVisor.value)
            auxVisor.textContent = auxVisor.textContent + resultVisor.value + " ="
            resultVisor.value = String(var1)

        }
    } else if (event.key === "Backspace") {
        if (valueVisor.length !== 1) {
            resultVisor.value = valueVisor.substring(0, valueVisor.length - 1);
        } else {
            resultVisor.value = "0"
        }
    } 
});