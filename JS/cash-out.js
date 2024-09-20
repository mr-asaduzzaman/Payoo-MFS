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

        // Show on transaction list
        const div = document.createElement('div');
        div.innerHTML=`
        <span class="grid grid-cols-2 gap-14 bg-red-500 text-white px-2 m-2">
         <p>Cash Out</p><p>${outBalance} Tk</p>
        </span>
        `

        document.getElementById('transaction-list').appendChild(div)
    }
    else {
        alert('Failed to add money! Try Again!!!')
    }
})

