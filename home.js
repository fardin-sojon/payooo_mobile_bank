const validPin = 1234;

document.getElementById("btn-add-money")
.addEventListener("click", function(event){
    event.preventDefault();

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount =parseInt(document.getElementById("add-amount").value)

    const pin = parseInt(document.getElementById("add-pin").value)

    const availableBalence = parseInt(document.getElementById("available-balance").innerText)
    console.log(availableBalence)

    if(accountNumber.length < 11){
        alert("Please provide valid Accouont Number")
        return;
    }

    if(pin !== validPin){
        alert("Please Provide valid Pin Number")
        return;
    }

    const totalNewAvaibleBalance = amount + availableBalence
    document.getElementById("available-balance").innerText = totalNewAvaibleBalance
})
