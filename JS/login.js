const loginButton = document.getElementById("login-button");
loginButton.addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = addInputFieldValueByID('Phone-number')
    const pinNumber = addInputFieldValueByID('pin-number')
    
    if(phoneNumber === 01627814225 && pinNumber === 1234){
        window.location.href= './home.html'
        showSectionByID('BG-Image')
    }
    else{
        alert("Incorrect Phone Number or Pin Number")
    }
})