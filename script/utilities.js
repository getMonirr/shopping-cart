// get input value 
function getInputValueById(id) {
    return parseInt(document.getElementById(id).value)
}
// get element innerText 
function getElementTextById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

// increase or Decrease quantity of product
function quantityUpdate(id, isIncrease) {
    const prevQuantity = getInputValueById(id);
    const newQuantity = isIncrease ? prevQuantity + 1 : prevQuantity - 1;
    return newQuantity < 0 ? 0 : newQuantity;
}

// set input value by id
function setInputValueById(id, value) {
    const inputElement = document.getElementById(id);
    inputElement.value = value;
}

// set innerText by id
function setInnerTextById(id, value) {
    const targetElement = document.getElementById(id);
    targetElement.innerText = value;
}

// calculate price
function calculatePrice(price, quantity) {
    return price * quantity;
}
// calculate subtotal

function subTotalCalculate() {
    const phoneTotal = getElementTextById('phone-total');
    const caseTotal = getElementTextById('case-total');

    setInnerTextById('subtotal', (phoneTotal + caseTotal));

    return (phoneTotal + caseTotal);

}

// tax calculator
function taxCalculate() {
    const totalProductPrice = subTotalCalculate();
    const taxAmount = parseFloat((totalProductPrice * 0.1).toFixed(3));

    setInnerTextById('tax', taxAmount);

    return taxAmount;
}

// total price calculator
function totalPriceCalculate() {
    const totalTax = taxCalculate();
    const totalSubTotal = subTotalCalculate();

    const totalPrice = totalTax + totalSubTotal;
    setInnerTextById('total-price', totalPrice);

}