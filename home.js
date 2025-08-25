let validPin = 1234;

// function to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);

    return inputFieldValueNumber;

}
// function to get value
function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value;

    return inputFieldValue;
}
// functions to get innerText
function getInputInnerText(id) {
    const inputField = document.getElementById(id)
    const inputFieldInnerText = inputField.innerText;
    const inputInnerTextValue = parseInt(inputFieldInnerText)

    return inputInnerTextValue;
}
// function to set InnerText
function setInnerText(value) {
    const availableBalenceElament = document.getElementById("available-balance");
    availableBalenceElament.innerText = value;
}
// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form")
    for (const from of forms) {
        from.style.display = "none"
        document.getElementById(id).style.display = "block"
    }
}
// function to toggle Buttons
    function handleToggleButton(id){
        const formButtons = document.getElementsByClassName("form-btn")

        for(const btn of formButtons){
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
            btn.classList.add("border-gray-200")
        }

        document.getElementById(id).classList.remove("border-gray-200")
        document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
    }
// Add money feature
document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const bank = getInputValue("bank")
        const accountNumber = document.getElementById("account-number").value
        const amount = getInputValueNumber("add-amount")

        const pin = getInputValueNumber("add-pin")

        const availableBalence = getInputInnerText("available-balance")

        if (accountNumber.length < 11) {
            alert("Please provide valid Accouont Number")
            return;
        }

        if (pin !== validPin) {
            alert("Please Provide valid Pin Number")
            return;
        }

        const totalNewAvaibleBalance = amount + availableBalence

        setInnerText(totalNewAvaibleBalance)
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

        const availableBalence = getInputInnerText("available-balance")


        const totalNewAvaibleBalance = availableBalence - amount
        console.log(totalNewAvaibleBalance)

        setInnerText(totalNewAvaibleBalance);
    })

// toggling feature

document.getElementById("add-button")
    .addEventListener("click", function () {
        // document.getElementById("cash-out-parent").style.display = "none"
        // document.getElementById("transfer-money-parent").style.display = "none"
        // document.getElementById("get-bonus-parent").style.display = "none"
        // document.getElementById("add-money-parent").style.display = "block"

        // const forms = document.getElementsByClassName("form")
        // for (const from of forms) {
        //     from.style.display = "none"
        //     document.getElementById("add-money-parent").style.display = "block"
        // }
        handleToggle("add-money-parent")

        handleToggleButton("add-button")
    })

document.getElementById("cash-out-button")
    .addEventListener("click", function () {

        handleToggle("cash-out-parent")

        handleToggleButton("cash-out-button")
    })

document.getElementById("transfer-money-button")
    .addEventListener("click", function () {

        handleToggle("transfer-money-parent")

        handleToggleButton("transfer-money-button")
    })

document.getElementById("get-bonus-button")
    .addEventListener("click", function () {

        handleToggle("get-bonus-parent")

        handleToggleButton("get-bonus-button")
    })

document.getElementById("pay-bill-button")
    .addEventListener("click", function () {

        handleToggle("pay-bill-parent")

        handleToggleButton("pay-bill-button")
    })

document.getElementById("transactions-button")
    .addEventListener("click", function () {

        handleToggle("transactions-parent")

        handleToggleButton("transactions-button")
    })