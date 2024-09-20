const addMoneyButton = document.getElementById('money-add-button');

addMoneyButton.addEventListener('click', function (event) {
    // Stop the form behavior to reload the browser. //
    event.preventDefault();


    const addBalance = addInputFieldValueByID('enter-amount')
    const pinNumber = addInputFieldValueByID('pin-number')
    const balance = addTextFieldValueByID('balance')
    const balanceDigit = parseFloat(balance)
    if (pinNumber === 1234) {

        const newBalance = balanceDigit + addBalance;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('enter-amount').value = '';
        document.getElementById('pin-number').value = '';
    }
    else {
        alert('Failed to add money! Try Again.')
    }
})

