const cashOutButton = document.getElementById('button-cash-out');

cashOutButton.addEventListener('click', function (event) {
    // Stop the form behavior to reload the browser. //
    event.preventDefault();


    const outBalance = addInputFieldValueByID('out-enter-amount')
    const pinNumber = addInputFieldValueByID('out-pin-number')
    const balance = addTextFieldValueByID('balance')
    const balanceDigit = parseFloat(balance)
    console.log('Somossaaaaa')
    if (pinNumber === 1234) {

        const newBalance = balanceDigit - outBalance;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('out-enter-amount').value = '';
        document.getElementById('out-pin-number').value = '';
    }
    else {
        alert('Failed to add money! Try Again!!!')
    }
})

