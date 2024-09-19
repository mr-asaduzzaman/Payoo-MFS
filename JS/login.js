const loginButton = document.getElementById("login-button");

loginButton.addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('Phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(phoneNumber === "01627814225" && pinNumber === "1234"){
        window.location.href= '/home.html'
    }
    else{
        alert("Incorrect Phone Number or Pin Number")
    }

})