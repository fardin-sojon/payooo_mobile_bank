const validPin = 1234;
// Add money feature
document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const bank = document.getElementById("bank").value
        const accountNumber = document.getElementById("account-number").value
        const amount = parseInt(document.getElementById("add-amount").value)

        const pin = parseInt(document.getElementById("add-pin").value)

        const availableBalence = parseInt(document.getElementById("available-balance").innerText)
        console.log(availableBalence)

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

        const amount = parseInt(document.getElementById("widhdraw-amount").value)

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