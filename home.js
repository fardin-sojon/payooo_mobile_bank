let validPin = 1234;

// function to get input values
    function getInputValueNumber(id){
        const inputField = document.getElementById(id)
        const inputFieldValue = inputField.value;
        const inputFieldValueNumber = parseInt(inputFieldValue);
        
        return inputFieldValueNumber;
        
    }
    function getInputValue(id){
        const inputField = document.getElementById(id)
        const inputFieldValue = inputField.value;

        return inputFieldValue;
    }

// Add money feature
document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const bank = getInputValue("bank")
        const accountNumber = document.getElementById("account-number").value
        const amount = getInputValueNumber("add-amount")

        const pin = getInputValueNumber("add-pin")

        const availableBalence = parseInt(document.getElementById("available-balance").innerText)

        if (accountNumber.length < 11) {
            alert("Please provide valid Accouont Number")
            return;
        }

        if (pin !== validPin) {
            alert("Please Provide valid Pin Number")
            return;
        }

        const totalNewAvaibleBalance = amount + availableBalence
        document.getElementById("available-balance").innerText = totalNewAvaibleBalance
    })
// Cash Out feature
document.getElementById("btn-withdraw-money")
    .addEventListener("click", function (event) {
        event.preventDefault()

        const agentNumber = document.getElementById("agent-number").value
        const amount = getInputValueNumber("widhdraw-amount")

        const cashPin = getInputValueNumber("cash-out-pin")
        

        if (agentNumber.length < 11) {
            alert("Please Provide valid Agent Number")
            return;
        }
        if (cashPin !== validPin) {
            alert("Please Provide valid Pin Number")
            return;
        }

        const availableBalence = parseInt(document.getElementById("available-balance").innerText)


        const totalNewAvaibleBalance = availableBalence - amount
        console.log(totalNewAvaibleBalance)

        document.getElementById("available-balance").innerText = totalNewAvaibleBalance
    })

// toggling feature

document.getElementById("add-button")
    .addEventListener("click", function () {
        document.getElementById("cash-out-parent").style.display = "none"
        document.getElementById("add-money-parent").style.display = "block"
    })

document.getElementById("cash-out-button")
    .addEventListener("click", function () {
        document.getElementById("add-money-parent").style.display = "none"
        document.getElementById("cash-out-parent").style.display = "block"
    })