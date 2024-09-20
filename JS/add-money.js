const addMoneyButton = document.getElementById('add-money-button');


addMoneyButton.addEventListener('click', function (event) {
    const addAmountValue = document.getElementById('enter-amount').value;
    const pinNumber = document.getElementById('pin-number').value;
    // Stop the form behavior to reload the browser. //
    event.preventDefault();


    if (pinNumber === '1234') {

        const accountBalance = document.getElementById('balance').innerText;
        const balanceBefore = parseFloat(accountBalance);
        const balanceInput = parseFloat(addAmountValue);
        const currentBalance = balanceBefore + balanceInput;
        document.getElementById('balance').innerText = currentBalance;
        document.getElementById('enter-amount').value = '';
        document.getElementById('pin-number').value = '';
    }
    else {
        alert('Failed to add money! Try Again.')
    }
})

