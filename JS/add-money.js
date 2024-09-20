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


        // Show on transaction History
        const div = document.createElement('div')
        div.innerHTML = `
        <span class="grid grid-cols-2 gap-14 bg-green-400 text-white px-2 m-2">
        <p> Add Money</p><p>${addBalance} Tk</p>
        </span>
        `
        document.getElementById('transaction-list').appendChild(div)
    }
    else {
        alert('Failed to add money! Try Again.')
    }
})

