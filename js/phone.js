function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);
    let newNumber

    if (isIncrease === true) {
        newNumber = phoneNumber + 1;
    }
    else {
        newNumber = phoneNumber - 1;
    }
    if (newNumber < 0) {
        alert('number can not negative')
        return
    }
    phoneNumberField.value = newNumber

    return newNumber

}

function updatePrice(phoneNumber) {
    const totalAmount = phoneNumber * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = totalAmount
}



document.getElementById('phone-btn-plus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(true)
    console.log(phoneNumber);
    updatePrice(phoneNumber)
    calculateSubTotal()

})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(false)
    if (!isNaN(phoneNumber)) {
        updatePrice(phoneNumber)
    }
    calculateSubTotal()


})