function updateSubTotal(elementId) {
    const totalPrice = document.getElementById(elementId);
    const totalPriceString = totalPrice.innerText
    const casePrice = parseInt(totalPriceString)
    return casePrice

}

function setTextElementValueById(elementId, value) {
    const totalSubTotal = document.getElementById(elementId);
    totalSubTotal.innerText = value;
}

function calculateSubTotal() {
    const currentCaseTotal = updateSubTotal("case-price")
    const currentPhoneTotal = updateSubTotal("phone-price")
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;

    setTextElementValueById('sub-total', currentSubTotal)
    const taxAmountString = (currentSubTotal * .10).toFixed(2);
    const taxAmount = parseFloat(taxAmountString)
    setTextElementValueById('tax-amount', taxAmount)
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('total-amount', finalAmount)
}