const btnPhonePlus = document.getElementById('btn-phone-plus');
const btnPhoneMinus = document.getElementById('btn-phone-minus');
const btnCasePlus = document.getElementById('btn-case-plus');
const btnCaseMinus = document.getElementById('btn-case-minus');



// function

function productQuantityUpdate(inputId, elementId, isIncrease, price) {
    const perProductPrice = price;
    const newProductQuantity = quantityUpdate(inputId, isIncrease);
    const totalPrice = calculatePrice(perProductPrice, newProductQuantity);

    setInputValueById(inputId, newProductQuantity);
    setInnerTextById(elementId, totalPrice);
    subTotalCalculate();
    taxCalculate();
    totalPriceCalculate();
}




// function quantityPhoneUpdate (isIncrease) {
//     const perPhonePrice = 1219;
//     const newPhoneQuantity = quantityUpdate('phone-input',isIncrease);
//     const totalPrice = calculatePrice(perPhonePrice,newPhoneQuantity);

//     setInputValueById('phone-input',newPhoneQuantity);
//     setInnerTextById('phone-total',totalPrice);
//     subTotalCalculate();
//     taxCalculate();
//     totalPriceCalculate();
// }


// function quantityCaseUpdate (isIncrease) {
//     const perCasePrice = 59;
//     const newCaseQuantity = quantityUpdate('case-input',isIncrease);
//     const totalCasePrice = calculatePrice(perCasePrice, newCaseQuantity);

//     setInputValueById('case-input',newCaseQuantity);
//     setInnerTextById('case-total',totalCasePrice);
//     subTotalCalculate();
//     taxCalculate();
//     totalPriceCalculate();

// }










// add event listener
// btnPhonePlus.addEventListener('click',() => quantityPhoneUpdate(true));
// btnPhoneMinus.addEventListener('click',() => quantityPhoneUpdate(false));

// btnCasePlus.addEventListener('click',() => quantityCaseUpdate(true));
// btnCaseMinus.addEventListener('click',() => quantityCaseUpdate(false));

// update
btnPhonePlus.addEventListener('click', () => productQuantityUpdate('phone-input', 'phone-total', true, 1219));
btnPhoneMinus.addEventListener('click', () => productQuantityUpdate('phone-input', 'phone-total', false, 1219));

btnCasePlus.addEventListener('click', () => productQuantityUpdate('case-input', 'case-total', true, 59));
btnCaseMinus.addEventListener('click', () => productQuantityUpdate('case-input', 'case-total', false, 59));

