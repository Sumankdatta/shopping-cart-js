function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field')
    const caseNumberString = caseNumberField.value;
    const caseNumber = parseInt(caseNumberString);

    let newCaseNumber

    if (isIncrease === true) {
        newCaseNumber = caseNumber + 1;
    }
    else {
        newCaseNumber = caseNumber - 1;
    }
    if (newCaseNumber < 0) {
        alert('Can not negative')
        return
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}

function updateCasePrice(caseNumber) {
    const totalAmount = caseNumber * 59;
    const casePrice = document.getElementById('case-price')
    casePrice.innerText = totalAmount

}


document.getElementById("case-btn-plus").addEventListener('click', function () {
    const caseNumber = updateCaseNumber(true);
    if (!isNaN(caseNumber)) {
        updateCasePrice(caseNumber)
    }
    calculateSubTotal()

})
document.getElementById("case-btn-minus").addEventListener('click', function () {
    const caseNumber = updateCaseNumber(false)

    if (!isNaN(caseNumber)) {
        updateCasePrice(caseNumber)
    }
    calculateSubTotal()

})