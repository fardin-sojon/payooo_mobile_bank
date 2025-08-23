// Login Button funstionality

document.getElementById('btn-login')
.addEventListener("click", function(event){
    event.preventDefault()
    const mobileNumber = 1650230536;
    const pinNumber = 1234 ;
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue);

    console.log(mobileNumberValueConverted, pinNumberValueConverted);
    

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert('Number Or Pin Invalid,,Please Inter Currect Pin Or Number')
    }
})