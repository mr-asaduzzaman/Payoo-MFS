// Input Value

function addInputFieldValueByID(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    
    return inputNumber;
}

// Text Value

function addTextFieldValueByID(id){
    const idText = document.getElementById(id).innerText
    return idText
}


function showSectionByID(id){
    //Hide
    document.getElementById('BG-Image').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');

    // Show
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('hidden');

}